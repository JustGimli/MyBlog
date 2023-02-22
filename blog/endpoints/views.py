from django.http import Http404, HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth.hashers import check_password

from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.pagination import CursorPagination
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import BasicAuthentication
from rest_framework import generics

from .models import Post, Contributor, Features, Skill, Character, Image

from .serializers import PostSerializer, ContributorsSerializer, FeaturesList, SkillSerializer, AdminSerializer, CharacterSerialiser, ImageSerializer

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
            print(post.text)
            images = Image.objects.filter(post_id=pk)
            imagesURLs = [str(image.image) for image in images]
            

            
            allData = {
                'generalData': {
                    'title': post.title,
                    'text': post.text,
                    'date': str(post.date),
                    'views': post.views,
                    'photo': str(post.photo)
                },
                'articleImages': imagesURLs
            }

            
            return Response(allData, status=status.HTTP_200_OK)

    def post(self, request): 
        print(request.data)
        
        
        title = request.data.get( 'generalData[title]' , False )
        text = request.data.get(  'generalData[text]', False )
        photo = request.data.get(  'generalData[photo]', False )

        # print(text)
        newData = { 'title': title, 'text': text, 'photo': photo }
        newPost = PostSerializer(data=newData)
        if newPost.is_valid():
            
            newPost.save()

            post = Post.objects.last()

           

            ### Парсинг QueryDict

            i = 0
            doParsing = True
            while doParsing:
                image = request.data.get(  f'articleImages[articleImages][{ i }]', False )

                if image != False:
                    
                    try:
                        print(image)
                        post.image_set.create(image=image)
                    except:
                        print('ПИзаж')
                        return Response(status=status.HTTP_400_BAD_REQUEST)

                    
                else:
                    doParsing = False

                i += 1

            ### Парсинг QueryDict
                    
            return Response(status=status.HTTP_201_CREATED)

        return Response(status=status.HTTP_400_BAD_REQUEST)
    

        
            
        
        


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
            us = User.objects.get(username=login)

            if check_password(password, us.password):
                print("checked true")
                return True
            return False

        except User.DoesNotExist:
            raise Http404

    def post(self, request, format=None):
        userData = AdminSerializer(data=request.data)
        if userData.is_valid():
            if self.check_data(login=request.data['login'], password=request.data['password']):
                
                return Response(status=status.HTTP_200_OK)
            else:
                return Response(status=status.HTTP_400_BAD_REQUEST)
                
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)
 
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
    

class  ImagesViews(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, format=None):
        print(request.data)
        print(format)
        image =  request.data.__getitem__('image')

        Image.objects.create(image=image)

        return Response(status=status.HTTP_200_OK)        

