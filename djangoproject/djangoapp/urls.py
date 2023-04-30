from rest_framework import routers
from django.urls import path, include
from . import views
from .views import StoreActiveView

router = routers.DefaultRouter()
router.register('categories', views.CategoryViewSet)
router.register('foods', views.FoodViewSet)
router.register('stores', views.StoreViewSet)
router.register('menus', views.MenuViewSet)
router.register('users', views.UserViewSet)
router.register('order', views.OrderViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('stores/<int:id>/active/', StoreActiveView.as_view(), name='store-active'),
]
