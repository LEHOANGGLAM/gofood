from rest_framework import serializers
from django.conf import settings
from .models import User, Food, Category, Store, Menu, Order, OrderItem, Comment


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']


class ImageSerializer(serializers.ModelSerializer):
    image_path = serializers.SerializerMethodField(source='image')

    def get_image_path(self, obj):
        if obj.image:
            request = self.context.get('request')
            if request is not None:
                if obj.image and not obj.image.name.startswith("/static"):
                    path = '/static/%s' % obj.image.name
                    return request.build_absolute_uri(path)
        return None


class FoodSerializer(ImageSerializer):
    store_id = serializers.IntegerField()
    category_id = serializers.IntegerField()
    menu_id = serializers.IntegerField()

    class Meta:
        model = Food
        fields = ['id', 'name', 'image', 'image_path', 'category_id', 'menu_id', 'store_id', 'created_date', 'price',
                  'description']
        extra_kwargs = {
            'image': {'write_only': 'True'},
            'image_path': {'read_only': 'True'},
        }


class StoreSerializer(ImageSerializer):
    class Meta:
        model = Store
        fields = ['id', 'name', 'address', 'phone', 'open_time', 'close_time', 'image', 'image_path',
                  'created_date', 'email', 'active']
        extra_kwargs = {
            'image': {'write_only': 'True'},
            'image_path': {'read_only': 'True'},
        }


class MenuSerializer(serializers.ModelSerializer):
    store_id = serializers.IntegerField()

    class Meta:
        model = Menu
        fields = ['id', 'name', 'store_id']


class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ['id', 'quantity', 'order', 'food', 'created_date']


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True)

    class Meta:
        model = Order
        fields = ['id', 'items', 'user', 'payment_date', 'total_price', 'created_date']


class AuthorizedStoreSerializer(StoreSerializer):
    liked = serializers.SerializerMethodField()
    rate = serializers.SerializerMethodField()

    def get_liked(self, store):
        request = self.context.get('request')
        if request:
            return store.like_set.filter(user=request.user, liked=True).exists()

    def get_rate(self, store):
        request = self.context.get('request')
        if request:
            r = store.rating_set.filter(user=request.user).first()
            return r.rate if r else 0

    class Meta:
        model = Store
        fields = StoreSerializer.Meta.fields + ['liked', 'rate']


class UserSerializer(serializers.ModelSerializer):
    avatar_path = serializers.SerializerMethodField(source='avatar')

    def get_avatar_path(self, obj):
        if obj.avatar:
            request = self.context.get('request')
            if request is not None:
                if obj.avatar and not obj.avatar.name.startswith("/static"):
                    path = '/static/%s' % obj.avatar.name
                    return request.build_absolute_uri(path)
        return None

    def create(self, validated_data):
        data = validated_data.copy()
        u = User(**data)
        u.set_password(u.password)
        u.save()
        return u

    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'username', 'password', 'avatar', 'avatar_path', 'email', 'role']
        extra_kwargs = {
            'avatar': {'write_only': 'True'},
            'password': {'write_only': 'True'}
        }


class CommentSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Comment
        fields = ['id', 'content', 'created_date', 'user']