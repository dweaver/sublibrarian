from django.db import models

class State(models.Model):
    name = models.CharField(max_length=100)
    abbreviation = models.CharField(max_length=2)

# Create your models here.
class County(models.Model):
    fips_code = models.IntegerField();
    name = models.CharField(max_length=100)
    state = models.ForeignKey(State)
