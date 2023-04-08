from rest_framework import pagination


class FoodPaginator(pagination.PageNumberPagination):
    page_size = 12

class StorePaginator(pagination.PageNumberPagination):
    page_size = 12

