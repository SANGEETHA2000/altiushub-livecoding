from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('task/', Task, basename='task')

urlpatterns = [
    path('user', User.as_view())
]