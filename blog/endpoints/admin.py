from django.contrib import admin

from .models import Post, Contributor

admin.site.register(Post)
admin.site.register(Contributor)