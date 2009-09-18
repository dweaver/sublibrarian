from django.db import models

class State(models.Model):
    name = models.CharField(max_length=100)
    abbreviation = models.CharField(max_length=2)

class County(models.Model):
    fips_code = models.IntegerField();
    name = models.CharField(max_length=100)
    state = models.ForeignKey(State)

class Lake(models.Model):
    name = models.CharField(max_length=100)
    dnr_id = models.CharField(max_length=20)
    county = models.ForeignKey(County)
    lat = models.FloatField()
    lon = models.FloatField()
    def __unicode__(self):
        return self.name
    
class Fish(models.Model):
    name = models.CharField(max_length=100)
    def __unicode__(self):
        return self.name

class Gear(models.Model):
    description = models.CharField(max_length=100)
    
class Sample(models.Model):
    lake = models.ForeignKey(Lake)
    fish = models.ForeignKey(Fish)
    year = models.IntegerField();
    gearUsed = models.ForeignKey(Gear)
    numPerNet = models.FloatField()
    numPerNetLow = models.FloatField()
    numPerNetHigh = models.FloatField()
    weight = models.FloatField()
    weightLow = models.FloatField()
    weightHigh = models.FloatField()
    
