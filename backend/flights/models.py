from django.db import models
from user_acc.models import user

class flightDetailModel(models.Model):
    id = models.AutoField(primary_key=True)
    flight_number = models.CharField(max_length=6, unique=True)
    airline = models.CharField(max_length=30)
    source = models.CharField(max_length=50)
    destination = models.CharField(max_length=50)
    departure = models.CharField(max_length=100)
    arrival = models.CharField(max_length = 100)
    departuretime = models.TimeField()
    arrivaltime = models.TimeField()
    duration = models.TimeField()

class flightPriceModel(models.Model):
    flightClass = [
        ('economy', 'Economy'), 
        ('first-class', 'First Class'), 
        ('business', 'Business')
    ]
    flight = models.ForeignKey(flightDetailModel, on_delete=models.CASCADE, related_name = "flight")
    type = models.CharField(max_length=11, choices=flightClass)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    available_seats = models.IntegerField()

class BookingsModel(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(user, on_delete=models.CASCADE, related_name="flight_booking")
    flight = models.ForeignKey(flightDetailModel, on_delete=models.CASCADE)
    flightPrice = models.ForeignKey(flightPriceModel, on_delete=models.CASCADE)
    Date_TOB = models.DateTimeField(auto_now_add=True)
    no_of_seats = models.IntegerField()
    contact = models.BigIntegerField()
    email = models.EmailField()
    pincode = models.IntegerField()
    city = models.CharField(max_length = 50)
    state = models.CharField(max_length = 50)
    address = models.CharField(max_length=200)

class PassengerDetailsModel(models.Model):
    booking = models.ForeignKey(BookingsModel, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=20)
    middle_name = models.CharField(max_length=20, blank= True)
    last_name = models.CharField(max_length=20, blank=True)
    age = models.IntegerField()
    seat = models.IntegerField()