from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Task(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    task_name = models.CharField(max_length=20)
    task_description = models.CharField(max_length=120)

    def __str__(self):
        return self.task_name