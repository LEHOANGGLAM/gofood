from rest_framework import viewsets, generics, parsers, permissions, status
from rest_framework.decorators import action
from rest_framework.views import Response
from rest_framework.pagination import PageNumberPagination
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


    @action(methods=['get'], detail=True, url_path='foods')
    def foods(self, request, pk):
        c = self.get_object()
        foods = c.food_set.filter(active=True)
        return Response(MenuSerializer(foods, many=True, context={'request': request}).data)

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

    def list(self, request, *args, **kwargs):
        keyword = request.GET.get('keyword', '')
        page = request.GET.get('pageNo', 1)

        queryset = self.queryset.filter(name__icontains=keyword)
        page = self.paginate_queryset(queryset)

        serializer = self.serializer_class(page, many=True)
        return self.get_paginated_response(serializer.data)

    @action(methods=['get'], detail=True, url_path='menus')
    def menus(self, request, pk):
        c = self.get_object()
        menus = c.menu_set.filter(active=True)
        return Response(MenuSerializer(menus, many=True, context={'request': request}).data)

    @action(methods=['get'], detail=True, url_path='foods')
    def foods(self, request, pk):
        c = self.get_object()
        foods = c.food_set.filter(active=True)
        return Response(FoodSerializer(foods, many=True, context={'request': request}).data)


class FoodViewSet(viewsets.ViewSet, generics.ListAPIView,
                  generics.CreateAPIView,
                  generics.UpdateAPIView,
                  generics.DestroyAPIView,
                  generics.RetrieveAPIView):
    queryset = Food.objects.filter(active=True)
    serializer_class = FoodSerializer
    pagination_class = FoodPaginator

    def list(self, request, *args, **kwargs):
        keyword = request.GET.get('keyword', '')
        page = request.GET.get('pageNo', 1)
        price_from = request.GET.get('priceFrom', None)
        price_to = request.GET.get('priceTo', None)
        category_id = request.GET.get('categoryId', None)

        queryset = self.queryset.filter(name__icontains=keyword)

        if price_from and price_to:
            queryset = queryset.filter(price__range=(price_from, price_to))
        elif price_from:
            queryset = queryset.filter(price__gte=price_from)
        elif price_to:
            queryset = queryset.filter(price__lte=price_to)

        if category_id is not None:
            queryset = queryset.filter(category_id=category_id)

        page = self.paginate_queryset(queryset)

        serializer = self.serializer_class(page, many=True)
        return self.get_paginated_response(serializer.data)

    def perform_create(self, serializer):
        store_id = serializer.validated_data.pop('store_id')
        store = Store.objects.get(id=store_id)
        category_id = serializer.validated_data.pop('category_id')
        category = Category.objects.get(id=category_id)
        menu_id = serializer.validated_data.pop('menu_id')
        menu = Menu.objects.get(id=menu_id)
        serializer.save(store=store)
        serializer.save(category=category)
        serializer.save(menu=menu)


