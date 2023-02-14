from rest_framework import serializers

from .models import Post, Contributor, Features

class PostSerializer(serializers.ModelSerializer):
    
    class Meta: 
        model = Post
        fields = "__all__" 

class ContributorsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Contributor
        fields = "__all__"

class FeaturesList(serializers.ModelSerializer):

    class Meta:
        model = Features
        fields = '__all__'