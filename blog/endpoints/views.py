from django.http import Http404, HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth.hashers import check_password
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.pagination import CursorPagination
from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny, IsAuthenticated
from rest_framework.authentication import SessionAuthentication
from rest_framework import generics

from .models import Post, Contributor, Features, Skill, Character, Image

from .serializers import PostSerializer, ContributorsSerializer, FeaturesList, SkillSerializer, AdminSerializer, CharacterSerialiser

class CursorSetPagination(CursorPagination):
    page_size = 2
    page_size_query_param = 'page_size'
    ordering ='-id'


class ListPostsView(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    pagination_class = CursorSetPagination


class PostView(APIView):

    def _get_object(self,pk):
        try:
            return Post.objects.get(id=pk)
        except Post.DoesNotExist:
            raise Http404
    

    def get(self, request, pk, format=None):
            post = self._get_object(pk) 
            srPost = PostSerializer(post)
            return Response(srPost.data)

    def post(self, request): 
        print(request.data)
        newPost = PostSerializer(data=request.data)
        if newPost.is_valid():
            newPost.save()
            return Response(newPost.data, status=status.HTTP_201_CREATED)
        
        return Response(newPost.errors, status=status.HTTP_400_BAD_REQUEST)


class UpdateCountViews(APIView):
    
    def set_views(self, id, views):
        try: 
            post = Post.objects.get(id=id)
            post.views = views
            post.save()
        except Post.DoesNotExist:
            raise Http404


    def patch(self, request, id, format=None):
        self.set_views(id=id, views=request.data.get("count"))

        return Response(status=status.HTTP_204_NO_CONTENT)
    

class ContributorViews(APIView):

    def _getContr(self):
        try:
            return Contributor.objects.all() 
        except Contributor.DoesNotExist:
            raise Http404

    def get(self, request, format=None):
        contr = self._getContr()
        contrSer = ContributorsSerializer(contr, many=True)

        return Response(contrSer.data, status=status.HTTP_200_OK)

class FeaturesViews(APIView):

    def _getContr(self):
        try:
            return Features.objects.all()
        except Contributor.DoesNotExist:
            raise Http404

    def get(self, request, format=None):
        contr = self._getContr()
        contrSer = FeaturesList(contr, many=True)
        
        return Response(contrSer.data, status=status.HTTP_200_OK)


class SkillViews(APIView):
    def _getContr(self):
        try:
            return Skill.objects.all()
        except Contributor.DoesNotExist:
            raise Http404

    def get(self, request, format=None):
        contr = self._getContr()
        contrSer = SkillSerializer(contr, many=True)
         
        return Response(contrSer.data, status=status.HTTP_200_OK)


class UserViews(APIView): 
    permission_classes = [AllowAny]
 
    def post(self, request, format=None):
        print(request.data)
        serializer = AdminSerializer(data=self.request.data, 
                                        context={'request': self.request}) 
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        # login(request, user)
        return Response(None, status=status.HTTP_202_ACCEPTED)

 
class CharactersViews(APIView):

    def get_object(self):
        try:
            return Character.objects.all()
        except Character.DoesNotExist:
            raise Http404
        
    def get(self, request):
        character = self.get_object() 
        characterJson = CharacterSerialiser(character, many=True)
        return Response(characterJson.data, status=status.HTTP_200_OK)
    