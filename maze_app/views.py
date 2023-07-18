from django.shortcuts import render
from django.http import JsonResponse
import json
from .utils import Maze

def index(request):
    return render(request, "index.html")

def run(request):
    
    payload_data = json.loads(request.body)
    
    try:
        maze = Maze(payload_data["maze"])
        print("Maze:")
        maze.print()
        valid = True
    except Exception as e:
        print(e)
        valid = False
 
    try:
        print("Solving...")
        maze.solve(payload_data["algorithm"])
        print("States Explored:", maze.num_explored)
        print("Solution:")
        maze.print()
        result=maze.stringify(show_explored=True, show_distance=True)
    
    except Exception as e:
        print(e)
        result = None

    return(JsonResponse({
        "result": result,
        "valid": valid,
        "states_explored": maze.num_explored if valid else 0,
        "height": maze.height if valid else None,
        "width": maze.width if valid else None,
        }, 
        status=200))