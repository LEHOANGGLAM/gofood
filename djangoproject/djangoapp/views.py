from rest_framework import viewsets, generics, parsers, permissions, status
from rest_framework.decorators import action
from rest_framework.views import Response
from django.shortcuts import render
from .models import Food, User, Category, Store, Menu
from .serializers import (FoodSerializer, CategorySerializer, StoreSerializer, MenuSerializer)
from .paginators import FoodPaginator, StorePaginator


# Create your views here.


class CategoryViewSet(viewsets.ViewSet, generics.ListAPIView,
                      generics.CreateAPIView,
                      generics.UpdateAPIView,
                      generics.DestroyAPIView,
                      generics.RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class MenuViewSet(viewsets.ViewSet, generics.ListAPIView,
                  generics.CreateAPIView,
                  generics.UpdateAPIView,
                  generics.DestroyAPIView,
                  generics.RetrieveAPIView):
    queryset = Menu.objects.filter(active=True)
    serializer_class = MenuSerializer


class StoreViewSet(viewsets.ViewSet, generics.ListAPIView,
                   generics.CreateAPIView,
                   generics.UpdateAPIView,
                   generics.DestroyAPIView,
                   generics.RetrieveAPIView):
    queryset = Store.objects.filter(active=True)
    serializer_class = StoreSerializer
    pagination_class = StorePaginator


class FoodViewSet(viewsets.ViewSet, generics.ListAPIView,
                  generics.CreateAPIView,
                  generics.UpdateAPIView,
                  generics.DestroyAPIView,
                  generics.RetrieveAPIView):
    queryset = Food.objects.filter(active=True)
    serializer_class = FoodSerializer
    pagination_class = FoodPaginator

    def filter_queryset(self, queryset):
        q = self.request.query_params.get("q")
        if q:
            queryset = queryset.filter(name__icontains=q)

        cate_id = self.request.query_params.get('category_id')
        if cate_id:
            queryset = queryset.filter(category_id=cate_id)

        return queryset
