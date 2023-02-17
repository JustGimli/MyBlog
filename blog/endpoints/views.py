from django.http import Http404, HttpResponse

from rest_framework import status
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.pagination import CursorPagination
from rest_framework import generics

from .models import Post, Contributor, Features, Skill, Admin

from .serializers import PostSerializer, ContributorsSerializer, FeaturesList, SkillSerializer, AdminSerializer
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
    

class ContribotorViews(APIView):

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
    
    def check_data(self, login, password):
        try:
            us = Admin.objects.get(login=login)
            if password == us.password:
                return True
            return False

        except Admin.DoesNotExist:
            raise Http404

    def post(self, request, format=None):
        userData = AdminSerializer(data=request.data)
        if userData.is_valid():
            if self.check_data(login=request.data['login'], password=request.data['password']):
                return Response(status=status.HTTP_200_OK)
            else:
                return Response(status=status.HTTP_404_NOT_FOUND)
        else:
            return Response(status=status.HTTP_404_BAD_REQUEST)


