from django.urls import path
from .views import main
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

urlpatterns = [
    path('', main)
]