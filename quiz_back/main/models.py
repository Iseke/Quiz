from datetime import datetime
from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField(max_length=400)
    like_count = models.IntegerField(default=0)
    created_at = models.DateTimeField(default=datetime.now())
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    def __str__(self):
        return f'{self.id}: {self.title}'

    def to_json(self):
        return {
            'id': self.id,
            'title': self.title,
            'body': self.body,
            'like_count': self.like_count,
            'created_at': self.created_at,
            'created_by': self.created_by
        }

