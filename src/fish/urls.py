from django.conf.urls.defaults import *

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    (r'^$', 'fish.views.index'),
    (r'^lakes', 'fish.views.lakes')
#    (r'^media/(?P<path>.*)$', 'django.views.static.serve',
#        {'document_root': os.path.join(os.path.dirname(__file__), 'media/')}),

    # Uncomment the admin/doc line below and add 'django.contrib.admindocs' 
    # to INSTALLED_APPS to enable admin documentation:
    # (r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # (r'^admin/', include(admin.site.urls)),
)
