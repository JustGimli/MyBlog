from django.db import models
from django.shortcuts import get_object_or_404

class Post(models.Model): 
    title = models.CharField(max_length=100, blank=False, unique=False)
    text = models.TextField()
    views = models.PositiveIntegerField()
    date = models.DateField(auto_now_add=True)
    photo = models.FileField(upload_to="uploads/%Y")

    def __str__(self) -> str:
        return f"""title:{self.title},
        date:{self.date},
        views:{self.views}"""
    
    class Meta:
        verbose_name = 'post'