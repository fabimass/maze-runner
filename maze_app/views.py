from django.shortcuts import render
from django.http import JsonResponse
import json

def index(request):
    return render(request, "index.html")

def run(request):
    
    payload_data = json.loads(request.body)
    print(payload_data)
    return(JsonResponse({
        "result": payload_data["maze"]
        }, 
        status=200))