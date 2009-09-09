from django.http import Http404
from django.http import HttpResponse
from django.shortcuts import render_to_response, get_object_or_404
from django.template import RequestContext

def index(request):
    return render_to_response('index.html', 
                              {'data': 1},
                              context_instance=RequestContext(request))
