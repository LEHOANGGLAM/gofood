from rest_framework import serializers
from .models import User, Food, Category


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
        field = ['id', 'name', 'category_id', 'created_date', 'price', 'image']