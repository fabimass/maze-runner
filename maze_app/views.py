from django.shortcuts import render
from django.http import JsonResponse
import json
from .utils import Maze

def index(request):
    return render(request, "index.html")

def run(request):
    
    payload_data = json.loads(request.body)
    maze = Maze(payload_data["maze"])
    
    print("Maze:")
    maze.print()

    print("Solving...")
    maze.solve()

    print("States Explored:", maze.num_explored)
    print("Solution:")
    maze.print()

    return(JsonResponse({
        "result": maze.stringify(show_explored=True),
        "states_explored": maze.num_explored
        }, 
        status=200))