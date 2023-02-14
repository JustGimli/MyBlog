from django.contrib import admin

from .models import Post, Contributor, Features

admin.site.register(Post)
admin.site.register(Contributor)
admin.site.register(Features)