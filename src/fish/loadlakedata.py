from fish.models import State, County
from fish.models import Lake, Fish, Gear, Sample
import csv
from utmToLatLng import utmToLatLng

def load(filename='data/fishing all mn.csv'):
    Lake.objects.all().delete()
    Fish.objects.all().delete()
    Gear.objects.all().delete()
    Sample.objects.all().delete()

    r = csv.reader(open(filename))
    r.next()
    for line in r:
        print line
        line = {"county":line[0], 
                "lakeid":line[1],
                "lakename":line[2],
                "year":line[3],
                "fishname":line[4],
                "gearUsed":line[5],
                "fishPerNet":line[6], 
                "fishPerNetRangeLow":line[7],
                "fishPerNetRangeHigh":line[8],
                "avgFishWeight":line[9],
                "avgFishWeightRangeLow":line[10], 
                "avgFishWeightRangeHigh":line[11]};

        try:
            lake = Lake.objects.get(dnr_id=line["lakeid"])
        except:
            try:
                county = County.objects.get(
                        name__iexact=line["county"], 
                        state__abbreviation__iexact='MN')
            except:
                print "County %s not found in database" % (line["county"])
                break;
            
            lake = Lake(name=line["lakename"], 
                            dnr_id=line["lakeid"], 
                            county=county,
                            lat=0.0,
                            lon=0.0)
            lake.save()

        try:
            fish = Fish.objects.get(name__iexact=line["fishname"])
        except:
            fish = Fish(name=line["fishname"])
            fish.save()
            
        try:
            gear = Gear.objects.get(description__iexact=line["gearUsed"])
        except:
            gear = Gear(description=line["gearUsed"])
            gear.save()
            
        sample = Sample(lake=lake,
                   fish=fish,
                   year=int(line["year"]),
                   gearUsed=gear,
                   numPerNet=float(line["fishPerNet"]),
                   numPerNetLow=float(line["fishPerNetRangeLow"]),
                   numPerNetHigh=float(line["fishPerNetRangeHigh"]),
                   weight=float(line["avgFishWeight"]),
                   weightLow=float(line["avgFishWeightRangeLow"]),
                   weightHigh=float(line["avgFishWeightRangeHigh"]))
        sample.save()

def load_lake_locations(filename='data/lakelocations.csv'):
    r = csv.reader(open(filename))
    r.next()
    for line in r:
        print line
        line = {"lakeid":line[0],
                "utfEasting":line[1],
                "utfNorthing":line[2]};

        try:
            lake = Lake.objects.get(dnr_id=line["lakeid"])
        except:
            print "Lake %s not found" % line["lakeid"]
        
        easting = float(line["utfEasting"])
        northing = float(line["utfNorthing"])
        lake.lat, lake.lon = utmToLatLng(15, 
                                         easting, 
                                         northing, 
                                         northernHemisphere=True)
        print "%s %fE %fN 15N ==> %f, %f" % (line["lakeid"], easting, northing, lake.lat, lake.lon)
        lake.save()
