from django.shortcuts import render
from django.http import JsonResponse

def index(request):
    return render(request, "index.html")

def run(request):
    

    return(JsonResponse({
        "result": "..."
        }, 
        status=200))