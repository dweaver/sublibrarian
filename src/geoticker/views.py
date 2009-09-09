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

def index(request):
    #l = [x for x in [1, 2, 3, 4, 5]]
    l = os.path.dirname(__file__)
    return render_to_response('testcanvas.html', 
                              {'data': l},
                              context_instance=RequestContext(request))

#render_to_response('ouija/index.html',
#        {'http_host': request.META['SERVER_NAME']}, 
#        context_instance = RequestContext(request))