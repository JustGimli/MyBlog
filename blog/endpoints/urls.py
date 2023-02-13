from django.urls import path, include

from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework.routers import DefaultRouter

from .views import ListPostsView, PostView, UpdateViews


urlpatterns = [
    path('posts/', ListPostsView.as_view()),
    path('posts/<int:pk>/', PostView.as_view()),
    path("posts/<int:id>/update-views", UpdateViews.as_view())

]

urlpatterns = format_suffix_patterns(urlpatterns=urlpatterns)