from rest_framework import serializers
from .models import User, Food, Category, Store, Menu


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']


class ImageSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField(source='image')

    def get_image(self, obj):
        if obj.image:
            request = self.context.get('request')
            return request.build_absolute_uri('/static/%s' % obj.image.name) if request else ''


class FoodSerializer(ImageSerializer):
    class Meta:
        model = Food
        fields = ['id', 'name', 'category_id', 'created_date', 'price', 'image']


class StoreSerializer(ImageSerializer):
    class Meta:
        model = Store
        fields = ['id', 'name', 'address', 'phone', 'open_time', 'close_time', 'image']


class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = ['id', 'name']
