from django.urls import path, include
from django.views.generic import TemplateView
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()

router.register('products', views.ProductViewSet)

urlpatterns = [
    path("", TemplateView.as_view(template_name='pricing.html'), name='pricing'),
    path('api/', include(router.urls)),
]
