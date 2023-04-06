from django.contrib import admin
from .models import Category, Food, Store, Menu

# Register your models here.
admin.site.register(Category)
admin.site.register(Food)
admin.site.register(Store)
admin.site.register(Menu)
