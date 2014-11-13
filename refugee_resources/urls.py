from django.conf.urls import patterns, include, url
from django.contrib import admin

admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'ref_app.views.index', name="index"),
    url(r'^proxy/(?P<path>.*)$', 'ref_app.views.proxy_to', {'target_url': 'https://basecamp.com/2784248/api/v1/'}),
    url(r'^admin/', include(admin.site.urls)),
)

