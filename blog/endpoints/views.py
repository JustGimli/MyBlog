from django.http import Http404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.pagination import CursorPagination
from rest_framework.permissions import  IsAuthenticated
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


class PostArticle(APIView):
    permission_classes = [IsAuthenticated]

    
    def post(self, request): 
        newPost = PostSerializer(data=request.data)
        if newPost.is_valid():
            newPost.save()
            return Response(newPost.data, status=status.HTTP_201_CREATED)
        
        
        title = request.data.get( 'generalData[title]' , False )
        text = request.data.get(  'generalData[text]', False )
        photo = request.data.get(  'generalData[photo]', False )

        print(title, text, photo)

        newData = { 'title': title, 'text': text, 'photo': photo }
        newPost = PostSerializer(data=newData)
        if newPost.is_valid():
            
            newPost.save()

            post = Post.objects.last()

            i = 0
            doParsing = True
            while doParsing:
                image = request.data.get(  f'articleImages[articleImages][{ i }]', False )

                if image != False:
                    
                    try:
                        post.image_set.create(image=image)
                    except:
                        return Response(status=status.HTTP_400_BAD_REQUEST)

                    
                else:
                    doParsing = False
                i += 1
                    
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
 
    def post(self, request, format=None):
        serializer = AdminSerializer(data=self.request.data, 
                                        context={'request': self.request}) 
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']

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
    