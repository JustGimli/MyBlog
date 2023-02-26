from django.urls import path, include

from rest_framework.urlpatterns import format_suffix_patterns


from .views import ListPostsView, PostView, UpdateCountViews, ContributorViews,  FeaturesViews, SkillViews,  UserViews, CharactersViews, PostArticle, index


urlpatterns = [
    path('posts/', ListPostsView.as_view()),
    path("posts/update/", PostArticle.as_view()),
    path('posts/<int:pk>/', PostView.as_view()),
    path("posts/<int:id>/update-views/", UpdateCountViews.as_view()),
    path("contributors/", ContributorViews.as_view()),
    path("features/", FeaturesViews.as_view()),
    path("skills/", SkillViews.as_view()),
    path("login/", UserViews.as_view()),
    path("characters/", CharactersViews.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns=urlpatterns)