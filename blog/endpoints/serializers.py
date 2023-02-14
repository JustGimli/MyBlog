from rest_framework import serializers, viewsets
from rest_framework.parsers import JSONParser

from .models import Post, Contributor

class PostSerializer(serializers.ModelSerializer):
    
    class Meta: 
        model = Post
        fields = "__all__" 

class ContributorsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Contributor
        fields = "__all__"