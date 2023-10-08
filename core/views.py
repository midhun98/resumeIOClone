from django.shortcuts import render
from rest_framework import status, viewsets
from rest_framework.permissions import IsAuthenticated
from .import serializers
from core.models import (
    Product
)
# Create your views here.

class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ProductSerializer
    queryset = Product.objects.all().order_by('id')
    permission_classes = [IsAuthenticated]  # Require authenticated users