from rest_framework import serializers
from django.conf import settings
from .models import User, Food, Category, Store, Menu


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']


class ImageSerializer(serializers.ModelSerializer):
    image = serializers.ImageField()

    def get_image(self, obj):
        if obj.image:
            request = self.context.get('request')
            return request.build_absolute_uri('/static/%s' % obj.image.name) if request else ''


class FoodSerializer(ImageSerializer):
    store_id = serializers.IntegerField()
    category_id = serializers.IntegerField()
    menu_id = serializers.IntegerField()

    class Meta:
        model = Food
        fields = ['id', 'name', 'image', 'category_id', 'menu_id', 'store_id', 'created_date', 'price', 'description']

    # def to_representation(self, obj):
    #     image_url = obj.image.url.replace(settings.STATIC_URL, '/static/')
    #     return {
    #         'id': obj.id,
    #         'name': obj.name,
    #         'image': image_url,
    #         'category_id': self.category_id,
    #         'menu_id': self.menu_id,
    #         'store_id': self.store_id,
    #         'created_date': obj.created_date,
    #         'price': obj.price
    #     }


class StoreSerializer(ImageSerializer):
    class Meta:
        model = Store
        fields = ['id', 'name', 'address', 'phone', 'open_time', 'close_time', 'image', 'created_date', 'email']


class MenuSerializer(serializers.ModelSerializer):
    store_id = serializers.IntegerField()

    class Meta:
        model = Menu
        fields = ['id', 'name', 'store_id']
