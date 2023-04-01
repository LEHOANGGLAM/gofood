from django.db import models
from django.contrib.auth.models import AbstractUser



class User(AbstractUser):
    avatar = models.ImageField(upload_to='users/%Y/%m', null=True)


class BaseModel(models.Model):
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)
    active = models.BooleanField(default=True)

    class Meta:
        abstract = True


class Category(models.Model):
    name = models.CharField(max_length=100,
                            unique=True)

    def __str__(self):
        return self.name

class Food(BaseModel):
    name = models.CharField(max_length=255)
    description = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    price = models.IntegerField()
    image = models.ImageField(upload_to='foods/%Y/%m', null=True)
    is_stock = models.BooleanField(default=True)

    def __str__(self):
        return self.name 




