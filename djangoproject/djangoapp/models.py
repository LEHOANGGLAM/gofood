from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    pass

class BaseModel(models.Model):
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)
    active = models.BooleanField(default=True)

    class Meta:
        abstract = True


class Category(models.Model):
    name = models.CharField(max_length=100,
                            unique=True)


class Course(BaseModel):
    subject = models.CharField(max_length=255)
    description = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
