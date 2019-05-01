from django.urls import path
from main import views


urlpatterns = [
    path('posts/', views.PostList.as_view()),
    path('posts/<int:pk>/', views.GetPost.as_view()),
    path('posts/<int:pk>/like', views.put_like),
    path('login/', views.login),
    path('logout/',views.logout),
]