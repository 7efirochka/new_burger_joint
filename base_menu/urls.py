from . import views
from django.urls import path, include

urlpatterns = [
    path('', views.menu_view),
]
