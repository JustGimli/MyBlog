from django.db import models
from django.shortcuts import get_object_or_404
import uuid

class Post(models.Model): 
    title = models.CharField(max_length=100, blank=False, unique=True)
    text = models.JSONField()
    views = models.PositiveIntegerField(default=0, blank=True)
    date = models.DateField(auto_now_add=True)
    photo = models.ImageField(upload_to="uploads/posts/%Y", blank=True)
 
    def __str__(self) -> str:
        return f"""title:{self.title},
        date:{self.date},
        views:{self.views}"""
     
    class Meta:
        verbose_name = 'post'

class Contributor(models.Model):
    name = models.CharField(max_length=256, blank=False)
    href_git = models.CharField(max_length=256)
    photo = models.FileField(upload_to="contributors/%Y")
    alt = models.CharField(max_length=50)

class Features(models.Model):
    title = models.CharField(max_length=256, unique=True)
    description = models.CharField(max_length=500)
    aos = models.CharField(max_length=25)
    
class Skill(models.Model):
    title = models.CharField(max_length=25, unique=True)
    rate = models.PositiveSmallIntegerField()

class Character(models.Model):
    name = models.CharField(unique=True, max_length=50)

class Image(models.Model):
    post_id = models.ForeignKey(Post, on_delete=models.CASCADE)
    image = models.ImageField(blank=True, null=True, upload_to=f"uploads/posts/%Y" ) # Этот адрес нужно запоминать в бд

