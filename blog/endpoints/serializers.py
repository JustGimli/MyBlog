from rest_framework import serializers, viewsets
from rest_framework.parsers import JSONParser

from .models import Post

class PostSerializer(serializers.ModelSerializer):
    
    class Meta: 
        model = Post
        fields = "__all__" 
