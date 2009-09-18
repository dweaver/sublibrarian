from fish.models import State, County
import csv

def load_states(filename='data/states.csv'):
    #load states
    State.objects.all().delete()
    r = csv.reader(open(filename))
    r.next()
    for line in r:
        print line
        s = State(name=line[0], abbreviation=line[1])
        s.save()
    
def load_counties(filename='data/counties.csv'):
    #load counties
    County.objects.all().delete()
    r = csv.reader(open(filename))
    # skip labels
    r.next()
    for line in r:
        print line
        fips = line[0]
        name = line[1]
        state_abbrev = line[2]
        c = County(fips_code = line[0], name = line[1], state = State.objects.get(abbreviation=line[2]))
        c.save()
    
load_states()
load_counties()    
