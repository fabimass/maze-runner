from django.shortcuts import render
from django.http import JsonResponse
import json
from .utils import Maze

def index(request):
    return render(request, "index.html")

def run(request):
    
    payload_data = json.loads(request.body)
    print(payload_data)

    maze = Maze(payload_data["maze"])
    print("Maze:")
    maze.print()
    print("Solving...")
    maze.solve()
    print("States Explored:", maze.num_explored)
    print("Solution:")
    maze.print()

    return(JsonResponse({
        "result": payload_data["maze"]
        }, 
        status=200))