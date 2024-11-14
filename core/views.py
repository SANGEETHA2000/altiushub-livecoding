from django.http import HttpResponse
from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView

# Create your views here.
def main(request):
    return HttpResponse("Hello")