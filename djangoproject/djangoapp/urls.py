from rest_framework import routers
from django.urls import path, include
from . import views

r = routers.DefaultRouter()
r.register("categories", views.CategoryViewSet)
r.register("foods", views.FoodViewSet)

urlpatterns = [
    path('', include(r.urls)),
]
