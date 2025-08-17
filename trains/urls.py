from django.urls import path
from trains import views 

urlpatterns = [
    path("", views.TrainsData.as_view(), name = "all trains"),
    path("source_dest_options/", views.SourceDestOptions.as_view(), name = "user options"),
    path("<int:id>/", views.trainInfo.as_view(), name = "train info"),
    path("booking_details/", views.BookInfo.as_view(), name = "book info")
]
