from django.contrib.auth.models import User

from rest_framework import serializers

from .models import Post, Contributor, Features, Skill

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


class SkillSerializer(serializers.ModelSerializer):

    class Meta:
        model = Skill
        fields = "__all__"


class AdminSerializer(serializers.Serializer):
    class Meta:
        model = User
        fields = ["username", "password"]

