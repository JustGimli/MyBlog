from django.urls import path, include

from rest_framework.urlpatterns import format_suffix_patterns

from .views import ListPostsView, PostView

urlpatterns = [
    path('posts/', ListPostsView.as_view()),
    path('posts/<int:pk>/', PostView.as_view() )
]

urlpatterns = format_suffix_patterns(urlpatterns=urlpatterns)