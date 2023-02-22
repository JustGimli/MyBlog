from django.contrib.auth.models import User

from rest_framework import serializers

from .models import Post, Contributor, Features, Skill, Character, Post, Image

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


class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "password"]


class CharacterSerialiser(serializers.ModelSerializer):

    class Meta:
        model = Character
        fields = ['name']


class ImageSerializer(serializers.ModelSerializer):
    
    class Meta: 
        model = Image
        fields = "__all__" 
