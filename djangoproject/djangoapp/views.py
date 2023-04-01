from rest_framework import viewsets, generics, parsers, permissions, status
from rest_framework.decorators import action
from rest_framework.views import Response
from django.shortcuts import render
from .models import Food, User, Category
from .serializers import (FoodSerializer, CategorySerializer)

# Create your views here.


class CategoryViewSet(viewsets.ViewSet, generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class FoodViewSet(viewsets.ViewSet, generics.ListAPIView):
    queryset = Food.objects.filter(active=True)
    serializer_class = FoodSerializer

    def filter_queryset(self, queryset):
        q = self.request.query_params.get("q")
        if q:
            queryset = queryset.filter(name__icontains=q)

        cate_id = self.request.query_params.get('category_id')
        if cate_id:
            queryset = queryset.filter(category_id=cate_id)

        return queryset


