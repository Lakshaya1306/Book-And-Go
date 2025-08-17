from django.urls import path
from flights import views 

urlpatterns = [
    path("", views.FlightsData.as_view(), name = "all trains"),
    path("source_dest_options/", views.SourceDestOptions.as_view(), name = "user options"),
    path("<int:id>/", views.flightInfo.as_view(), name = "flight info"),
    path("booking_details/", views.BookInfo.as_view(), name = "book info")
]
