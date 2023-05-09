from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    avatar = models.ImageField(upload_to='users/%Y/%m', null=True)
    phone = models.CharField(unique=True, null=True, max_length=11)
    role = models.CharField(max_length=45, default=None, null=True)

    def __str__(self):
        return self.username


class BaseModel(models.Model):
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)
    active = models.BooleanField(default=True)

    class Meta:
        abstract = True


class Category(models.Model):
    name = models.CharField(max_length=100,
                            unique=True)

    def __str__(self):
        return self.name


class Store(models.Model):
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)
    active = models.BooleanField(default=False)
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    description = models.TextField()
    phone = models.CharField(max_length=11)
    open_time = models.TimeField()
    close_time = models.TimeField()
    image = models.ImageField(upload_to='stores/%Y/%m', null=True)
    email = models.EmailField(unique=True, null=True, blank=True, default=None)

    def __str__(self):
        return self.name


class Menu(BaseModel):
    name = models.CharField(max_length=200)
    description = models.TextField()
    store = models.ForeignKey(Store, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Food(BaseModel):
    name = models.CharField(max_length=255)
    description = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    menu = models.ForeignKey(Menu, on_delete=models.PROTECT, null=True)
    store = models.ForeignKey(Store, on_delete=models.CASCADE, null=True)
    price = models.IntegerField()
    image = models.ImageField(upload_to='foods/%Y/%m', null=True)
    is_stock = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Order(BaseModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    payment_date = models.DateTimeField(blank=True, null=True)
    total_price = models.IntegerField(default=0)

    class Meta:
        verbose_name = 'Order'
        verbose_name_plural = 'Orders'
        ordering = ('-created_date',)

    def __str__(self):
        return f'{self.user.name}\'s order ({self.id})'


class OrderItem(BaseModel):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items', null=True)
    food = models.ForeignKey(Food, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)

    class Meta:
        verbose_name = 'Order item'
        verbose_name_plural = 'Order items'
        ordering = ('-created_date',)

    def __str__(self):
        return f'{self.quantity} of {self.food.name}'


class ActionBase(BaseModel):
    store = models.ForeignKey(Store, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('store', 'user')
        abstract = True


class Like(ActionBase):
    liked = models.BooleanField(default=True)


class Rating(ActionBase):
    rate = models.SmallIntegerField(default=0)





