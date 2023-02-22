from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static

from django.conf import settings

from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = ([
    path('admin/', admin.site.urls),
    path('', include("endpoints.urls")),
    path('token/', obtain_auth_token)

])

if settings.DEBUG:
    urlpatterns = [path('__debug__/', include("debug_toolbar.urls")),] + urlpatterns + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)