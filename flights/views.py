from flights.models import flightDetailModel, flightPriceModel, BookingsModel, PassengerDetailsModel
from flights.serializers import FlightSerializer, BookingSerializer
from datetime import datetime
from utility.functions import timeBasedData, priceBasedData, durationBasedData
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.pagination import PageNumberPagination
from django.forms.models import model_to_dict
from django.db import transaction
from django.db.models import Subquery, OuterRef

class SourceDestOptions(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        """This function takes in the request object and returns the list of sources and destination as per the records in DATABASE, useful for providing the options for dropdown menu 

        Args:
            request (): request object coming from the client's browser

        Returns:
            response: list of sources and destination
        """
        source = flightDetailModel.objects.distinct().values_list('source', flat=True)
        destination = flightDetailModel.objects.distinct().values_list('destination', flat=True)
        return Response({"status":"Success", 'data' : {'source':source, 'destination': destination}}, status=status.HTTP_200_OK)

class FlightsData(APIView):
    serializer_class = FlightSerializer 
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        """This function takes in the request object and applies the sorting or filtering functionality as per the query parameters sent by the user and in the end returns the entries which will be sorted or filtered as per the conditions
        Args:
            request (_type_): request object coming from the browser
        Returns:
            response: entries satisying the source and destination which will be either sorted or filtered or as it is. 
        """
        try:
            source = request.query_params.get('source')
            destination = request.query_params.get('destination')
            date = request.query_params.get('date')
            classType = request.query_params.get('class', 'sleeper')
            request.session['type'] = classType
            
            if date:
                request.session['date'] = date
            else:
                return Response({'status':'Failure', 'message':"Date is required"}, status=status.HTTP_400_BAD_REQUEST)
        
            if source and destination:
                currTime = datetime.now().time()
                SubQry = flightPriceModel.objects.filter(
                    flight = OuterRef('pk'),
                    type = classType
                )
                
                flightdata = flightDetailModel.objects.filter(source = source, destination = destination
                                                            ).annotate(
                                                                price = Subquery(SubQry.values('price')[:1]),
                                                                available_seats = Subquery(SubQry.values('available_seats')[:1])
                                                            )
                
                isdata = flightdata.exists()
                if not isdata:
                    return Response({'status':"Failure", 'message':"No flights availabele"}, status = status.HTTP_204_NO_CONTENT)
                
                deptTimeRange = request.query_params.get('depttimerange')
                arrivalTimeRange = request.query_params.get('arrivaltimerange')
                sortVal = request.query_params.get('sorting')
                userMinPrice = request.query_params.get('minprice')
                userMaxPrice = request.query_params.get('maxprice')
                userMinDuration = request.query_params.get('minduration')
                userMaxDuration = request.query_params.get('maxduration')
            
                if sortVal:
                    sortList = sortVal.split(",")
                    flightdata = flightdata.order_by(*sortList)
            
                if deptTimeRange or arrivalTimeRange:
                    flightdata = timeBasedData(deptTimeRange, arrivalTimeRange, flightdata)
            
                if userMinDuration or userMaxDuration:
                    flightdata = durationBasedData(userMinDuration, userMaxDuration, flightdata)
                
                if userMinPrice or userMaxPrice:
                    priceList = flightdata.values_list('price',flat=True)
                    minPrice = min(priceList)
                    maxPrice = max(priceList)
                
                    flightdata = priceBasedData(minPrice, maxPrice, userMinPrice, userMaxPrice, flightdata)
                    
                if flightdata:        
                    paginator = PageNumberPagination()
                    pageqs = paginator.paginate_queryset(flightdata, request)
                    serializer = FlightSerializer(pageqs, many = True, context = {'isdate':False})
        
                    return paginator.get_paginated_response(serializer.data)
                else:
                    return Response({'status':"Failure", "message":"No flights in desired duration"}, status = status.HTTP_204_NO_CONTENT)
        
            else:
                return Response({'status':"Failure", "message":"source and destination can't be empty"}, status=status.HTTP_400_BAD_REQUEST)
            
        except Exception as e:
            return Response({'status':"Failure", 'error':str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class flightInfo(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]
    
    def get(self, request, **kwargs):
        """This function takes request object and kwargs as the input and with the id parameter fetches the record of the desired flight 
        Args:
            request (rest_framework.request object):
        Returns:
            Response: Returns flight Data for the specific flight id 
        """
        try: 
            SubQry = flightPriceModel.objects.filter(flight_id = kwargs['id'], type = request.session.get('type'))
            flightData = flightDetailModel.objects.annotate(price = Subquery(SubQry.values('price')[:1]), available_seats = Subquery(SubQry.values('available_seats')[:1])).get(id = kwargs['id'])
            serializer = FlightSerializer(flightData, context = {'isdate':True,'date':request.session.get('date')})
            
        except flightDetailModel.DoesNotExist:
            return Response({'status':"Failure", 'message':"flight no longer exists"}, status=status.HTTP_404_NOT_FOUND)
        
        else:
            return Response({"status":"Success!", 'data':serializer.data}, status=status.HTTP_200_OK)
    
    def post(self, request, **kwargs):
        """This function fetches the data sent by the user, validates that data and if the data is valid then it saves the entry in the DB, and available seats are reduced after the record is saved 

        Args:
            request (rest_framework.request object): _description_

        Returns:
            rest_framework.response object: A JSON with the current status and corresponding message or error if any 
        """
        try:    
            with transaction.atomic():
                data = request.data
                user = request.user
                userId = user.id
                flightId = kwargs['id']
                flightPriceId = flightPriceModel.objects.get(flight_id = flightId, type = request.session.get('type')).id
                
                data.update({'user':userId, 'flight':flightId, 'flightPrice': flightPriceId})
                
                serializer = BookingSerializer(data = data)
                if serializer.is_valid():
                    print("hello world")
                    serializer.save()
                    flightInstance = flightPriceModel.objects.get(id = flightPriceId)
                    no_of_seats = data.get('no_of_seats')
                    
                    flightInstance.available_seats = flightInstance.available_seats - no_of_seats
                    flightInstance.save()
                    
                    return Response({'status':'Success', 'message':'Seat Booked Successfully'}, status = status.HTTP_200_OK)
                else:
                    print(serializer.errors)
                    return Response({'status':'Failure', 'message':'Seat not booked please check the input credentials'}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e: 
            return Response({'status':'Failure', 'errors':str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class BookInfo(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]
    
    def get(self, request):
        """This function displays the booking details like billing details, passenger details, contact details using the user id of the authenticated user 

        Args:
            request (rest_framework.request object)

        Returns:
           rest_framework.response object: It sends json as a response containing the current status as well as the required data 
        """
        try:   
            user = request.user
            user_id = user.id
        
            booking_entry = BookingsModel.objects.filter(user = user_id).last()
            booking_dict = model_to_dict(booking_entry, fields=['no_of_seats', 'contact', 'email', 'pincode', 'city', 'state', 'address'])
        
            flightId = booking_entry.flight_id
            flightPriceId = booking_entry.flightPrice_id
            
            SubQry = flightPriceModel.objects.filter(id = flightPriceId)
            flight_entry = flightDetailModel.objects.annotate(price = Subquery(SubQry.values('price')[:1])).get(id = flightId)
            flight_dict = FlightSerializer(flight_entry, context = {'isdate':True, 'date':request.session.get('date')}).data
        
            bookingId = booking_entry.id 
            passengerDetails = PassengerDetailsModel.objects.filter(booking = bookingId).values_list('first_name', 'middle_name', 'last_name', 'age', 'seat')
        
            passengerList = []
            for entry in passengerDetails:
                passengerList.append(list(entry))
    
            booking_data = [booking_dict, flight_dict, passengerList]
        
        except Exception as e:
            return Response({'status':"Failure", 'message':str(e)}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'status':"Success", 'data':booking_data}, status=status.HTTP_200_OK)
        