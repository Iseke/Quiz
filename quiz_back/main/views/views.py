from django.http import JsonResponse
from main.models import Post
from main.serializer import PostSerializer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated,AllowAny


class PostList(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = PostSerializer
    queryset = Post.objects.all()

    def perform_create(self, serializer):
        serializer.save(created_by= self.request.user)

class GetPost(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = PostSerializer

    def get_queryset(self):
        return Post.objects.filter(created_by=self.request.user)





