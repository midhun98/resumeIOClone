from django.db import models
from django_ckeditor_5.fields import CKEditor5Field

# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=50)
    unit_price = models.DecimalField(max_digits=10, decimal_places=2)
    description = CKEditor5Field('Text', config_name='extends', null=True, blank=True)
