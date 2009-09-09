from django.http import Http404
from django.http import HttpResponse
from django.shortcuts import render_to_response, get_object_or_404

def index(request):
    return HttpResponse('test, yay! Hello! Wow!')
