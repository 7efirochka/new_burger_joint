from django.shortcuts import render
from django.http import HttpResponse
from .models import Images

# Create your views here.
def view(request):
    image = Images.objects.all()
    return render(request, 'main/main_page.html', {'image': image})

