from rest_framework import routers
from django.urls import path, include
from . import views

router = routers.DefaultRouter()
router.register('categories', views.CategoryViewSet)
router.register('foods', views.FoodViewSet)
router.register('stores', views.StoreViewSet)
router.register('menus', views.MenuViewSet)
router.register('users', views.UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
