from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.authtoken.models import Token
from rest_framework import status
from main.models import Post
from main.serializer import PostSerializer

@api_view(['POST'])
def put_like(request,pk):
    if request.method == 'POST':
        try:
            get_post = Post.objects.get(id=pk)
        except Post.DoesNotExist as e:
            return Response({'error:' : str(e)})
        serializer = PostSerializer(instance=get_post,data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data,status=status.HTTP_200_OK)
    return Response(status=status.HTTP_404_NOT_FOUND)