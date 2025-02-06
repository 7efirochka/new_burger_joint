from django.shortcuts import render
from .models import Burgers, Breakfasts, Snacks, Sauces, Drinks, Hotdogs

# Create your views here.
def menu(request):
    listM = Burgers.objects.all()
    return render(request, "base_menu/menu.html", {'listM':listM})



def menu_view(request):
    burgers = Burgers.objects.all()
    breakfasts = Breakfasts.objects.all()
    hotdogs = Hotdogs.objects.all()
    snacks = Snacks.objects.all()
    sauces = Sauces.objects.all()
    drinks = Drinks.objects.all()


    return render(request, 'base_menu/menu.html', {"burgers":burgers, 'breakfasts':breakfasts , "hotdogs": hotdogs, 'snacks': snacks, "sauces": sauces, "drinks": drinks})