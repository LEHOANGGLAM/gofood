from rest_framework import viewsets, generics, parsers, permissions, status
from rest_framework.decorators import action
from rest_framework.views import Response, APIView
from rest_framework.pagination import PageNumberPagination
from django.shortcuts import render
from .models import Food, User, Category, Store, Menu, Order, OrderItem
from .serializers import (FoodSerializer, CategorySerializer, StoreSerializer, MenuSerializer, UserSerializer,
                          OrderSerializer)
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
    queryset = Store.objects.filter(active=True)
    serializer_class = StoreSerializer
    pagination_class = StorePaginator

    def list(self, request, *args, **kwargs):
        keyword = request.GET.get('keyword', '')
        page = request.GET.get('pageNo', 1)
        keyword = keyword.strip()
        queryset = self.queryset.filter(name__icontains=keyword)
        page = self.paginate_queryset(queryset)
        serializer = self.serializer_class(page, many=True, context={'request': request})
        response_data = serializer.data
        return self.get_paginated_response(response_data)

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

class OrderViewSet(viewsets.ViewSet,
                   generics.CreateAPIView):
    queryset = Order.objects.filter(active=True)
    serializer_class = OrderSerializer

    def create(self, request):
        order_items = request.data['items']
        user = request.user
        order = Order.objects.create(user=user)
        for item in order_items:
            food_id = item['food']
            quantity = item['quantity']
            food = Food.objects.get(id=food_id)
            order_item = OrderItem.objects.create(food=food, quantity=quantity)
            order.items.add(order_item)
        order.save()
        serializer = self.get_serializer(order)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class StoreActiveView(generics.UpdateAPIView):
    serializer_class = StoreSerializer
    queryset = Store.objects.all()
    lookup_field = 'id'

    def patch(self, request, *args, **kwargs):
        store = self.get_object()
        if store.active:
            store.active = False
        else:
            store.active = True
        store.save()
        serializer = self.serializer_class(store)
        return Response(serializer.data)


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
        keyword = keyword.strip()
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
        serializer = self.serializer_class(page, many=True, context={'request': request})
        response_data = serializer.data
        return self.get_paginated_response(response_data)

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





class UserViewSet(viewsets.ViewSet, generics.CreateAPIView, generics.ListAPIView, generics.RetrieveAPIView):
    queryset = User.objects.filter(is_active=True)
    serializer_class = UserSerializer
    parser_classes = [parsers.MultiPartParser, ]

    def get_permissions(self):
        if self.action in ['current_user']:
            return [permissions.IsAuthenticated()]
        return [permissions.AllowAny()]

    @action(methods=['get', 'put'], detail=False, url_path='current-user')
    def current_user(self, request):
        u = request.user
        if request.method.__eq__('PUT'):
            for k, v in request.data.items():
                if k.__eq__('password'):
                    u.set_password(k)
                else:
                    setattr(u, k, v)
            u.save()

        return Response(UserSerializer(u, context={'request': request}).data)
