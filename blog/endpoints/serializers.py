from django.contrib.auth import authenticate
from django.contrib.auth.models import User

from rest_framework import serializers

from .models import Post, Contributor, Features, Skill, Character, Post

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

    username = serializers.CharField(write_only=True)
    password = serializers.CharField(
        trim_whitespace=True,
        style={'input_type':'password'},
        write_only=True
    )

    def validate(self, attrs):
        username = attrs.get('username')
        password = attrs.get('password')

        if username and password:
            user = authenticate(request=self.context.get('request'),
                                username=username, password=password)

            if not user:
                msg = 'Access denied: wrong username or password.'

                raise serializers.ValidationError(msg, code='authorization')    
        else:
            msg = 'Both "username" and "password" are required.'
            raise serializers.ValidationError(msg, code='authorization')

        attrs['user'] = user
        return attrs    


class CharacterSerialiser(serializers.ModelSerializer):

    class Meta:
        model = Character
        fields = ['name']
