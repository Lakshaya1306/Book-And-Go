from django.db import models
from user_acc.models import user

class trainDetailModel(models.Model):
    id = models.AutoField(primary_key=True)
    train_number = models.CharField(max_length=6, unique=True)
    train_name = models.CharField(max_length=30)
    source = models.CharField(max_length=50)
    destination = models.CharField(max_length=50)
    departure = models.CharField(max_length=100)
    arrival = models.CharField(max_length = 100)
    departuretime = models.TimeField()
    arrivaltime = models.TimeField()
    duration = models.TimeField()

class trainPriceModel(models.Model):
    trainClass = [
        ('sleeper', 'sleeper'), 
        ('3AC', '3AC'), 
        ('2AC', '2AC'), 
        ('1AC', '1AC'),
    ]
    
    train = models.ForeignKey(trainDetailModel, on_delete=models.CASCADE)
    type = models.CharField(max_length=11, choices=trainClass)
    price = models.DecimalField(max_digits=7, decimal_places=2)
    available_seats = models.IntegerField()

class BookingsModel(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(user, on_delete=models.CASCADE, related_name="train_booking")
    train = models.ForeignKey(trainDetailModel, on_delete=models.CASCADE)
    trainPrice = models.ForeignKey(trainPriceModel, on_delete=models.CASCADE)
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