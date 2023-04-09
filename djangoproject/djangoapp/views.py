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
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer

    def perform_create(self, serializer):
        store_id = serializer.validated_data.pop('store_id')
        your_foreign_key = Store.objects.get(id=store_id)
        serializer.save(store=your_foreign_key)



class StoreViewSet(viewsets.ViewSet, generics.ListAPIView,
                   generics.CreateAPIView,
                   generics.UpdateAPIView,
                   generics.DestroyAPIView,
                   generics.RetrieveAPIView):
    queryset = Store.objects.all()
    serializer_class = StoreSerializer
    pagination_class = StorePaginator

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        image = serializer.validated_data.get('image', None)
        if image:
            instance = serializer.save(image=image)
            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        else:
            return Response({'error': 'Image is required.'}, status=status.HTTP_400_BAD_REQUEST)




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

    def perform_create(self, serializer):
        store_id = serializer.validated_data.pop('store_id')
        store= Store.objects.get(id=store_id)
        category_id = serializer.validated_data.pop('category_id')
        category = Category.objects.get(id=category_id)
        menu_id = serializer.validated_data.pop('menu_id')
        menu = Menu.objects.get(id=menu_id)
        serializer.save(store=store)
        serializer.save(category=category)
        serializer.save(menu=menu)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        image = serializer.validated_data.get('image', None)
        if image:
            instance = serializer.save(image=image)
            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        else:
            return Response({'error': 'Image is required.'}, status=status.HTTP_400_BAD_REQUEST)

