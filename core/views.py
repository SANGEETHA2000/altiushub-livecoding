from django.http import HttpResponse
from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User
from .models import Task
from .serializers import TaskSerializer

# Create your views here.
class User(APIView):
    def post(self, request):
        print(request)
        user = User.objects.create_user(request.username, request.email, request.password)
        if user:
            return Response("User registered succesfully")
        else:
            return Response("User registeration failed")
        
class Tasks(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def list(self, request):
        queryset = self.queryset.get(pk=request.user_id)
        serializer = self.serializer_class(queryset)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)

    def update(self, request, pk=None):
        task = self.queryset.get(pk=pk)
        serializer = self.serializer_class(task, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)

    def destroy(self, request, pk=None):
        task = self.queryset.get(pk=pk)
        task.delete()
        return Response("Deleted")

