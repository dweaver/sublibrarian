# Create your views here.
from django.http import Http404
from django.core import serializers
from django.http import HttpResponse
from django.shortcuts import render_to_response, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.template import RequestContext
import datetime
import re, os
from django import forms
from fish.models import State, County
from fish.models import Lake, Fish, Gear, Sample
from django.core import serializers

def index(request):
    #l = [x for x in [1, 2, 3, 4, 5]]
    l = os.path.dirname(__file__)
    return render_to_response('fishmap.html', 
                              {'fish': Fish.objects.all(),
                               'orderByOptions': [{'value':'-weight',
                                                  'label':'average weight'},
                                                  {'value':'-numPerNet',
                                                   'label':'number caught'}]},
                              context_instance=RequestContext(request))

# e.g. http://localhost:8000/fish/lakes?fish=125&orderby=-weight
# for lakes of common carp by weight
def lakes(request):
    orderby = request.GET['orderby']
    fish_id = int(request.GET['fish'])
    limit = 10
    samples = Sample.objects.filter(fish__id =fish_id).order_by(orderby)
    samplesJson = serializers.serialize("json", [sample for sample in samples[:limit]])
    lakesJson = serializers.serialize("json", [sample.lake for sample in samples[:limit]])
    gearJson = serializers.serialize("json", [sample.gearUsed for sample in samples[:limit]])
    response = "{'samples': " + samplesJson + ",'lakes':" + lakesJson + ",'gear':" + gearJson + "}";
    return HttpResponse(response, mimetype="text/html")

