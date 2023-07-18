import sys
import re

class Node():
    def __init__(self, state, parent, action, distance):
        self.state = state # The coordinates of the current position
        self.parent = parent # This is the cell where the ai came from
        self.action = action # This is the action that the ai took to arrive to this state
        self.manhattan = distance # The Manhattan distance to the goal
        self.movements = parent.movements + 1 if parent is not None else 0 # The number of movements taken from the start to reach this state


class StackFrontier():
    def __init__(self):
        self.frontier = []

    def add(self, node):
        self.frontier.append(node)

    def contains_state(self, state):
        return any(node.state == state for node in self.frontier)

    def empty(self):
        return len(self.frontier) == 0

    def remove(self):
        if self.empty():
            raise Exception("empty frontier")
        else:
            node = self.frontier[-1]
            self.frontier = self.frontier[:-1]
            return node


class QueueFrontier(StackFrontier):

    def remove(self):
        if self.empty():
            raise Exception("empty frontier")
        else:
            node = self.frontier[0]
            self.frontier = self.frontier[1:]
            return node


class GreedyFrontier(StackFrontier):

    def remove(self):
        if self.empty():
            raise Exception("empty frontier")
        else:
            node = min(self.frontier, key=lambda x: x.manhattan)
            self.frontier.remove(node)
            return node
        

class StarFrontier(StackFrontier):

    def remove(self):
        if self.empty():
            raise Exception("empty frontier")
        else:
            node = min(self.frontier, key=lambda x: (x.manhattan + x.movements))
            self.frontier.remove(node)
            return node


class Maze():

    def __init__(self, contents):

        # Validate start and goal
        if contents.count("A") != 1:
            raise Exception("maze must have exactly one start point")
        if contents.count("B") != 1:
            raise Exception("maze must have exactly one goal")
        
        # Validate content
        if self.check_integrity(contents, "# \nAB"):
            pass
        else:
            raise Exception("maze has invalid characters")

        # Determine height and width of maze
        contents = contents.splitlines()
        self.height = len(contents)
        self.width = max(len(line) for line in contents)

        # Keep track of walls
        self.walls = []
        for i in range(self.height):
            row = []
            for j in range(self.width):
                try:
                    if contents[i][j] == "A":
                        self.start = (i, j)
                        row.append(False)
                    elif contents[i][j] == "B":
                        self.goal = (i, j)
                        row.append(False)
                    elif contents[i][j] == " ":
                        row.append(False)
                    else:
                        row.append(True)
                except IndexError:
                    row.append(False)
            self.walls.append(row)

        self.solution = None

    def check_integrity(self, string, pattern):
        """Checks for unallowed characters in the maze design."""

        # Escape special characters in the pattern
        escaped_pattern = re.escape(pattern)
        
        # Create the regular expression pattern
        regex_pattern = f'^[{escaped_pattern}]+$'
        
        # Check if the string matches the pattern
        if re.match(regex_pattern, string):
            return True
        else:
            return False

    def print(self):
        """Prints the maze in the console."""

        solution = self.solution[1] if self.solution is not None else None
        print()
        for i, row in enumerate(self.walls):
            for j, col in enumerate(row):
                if col:
                    print("█", end="")
                elif (i, j) == self.start:
                    print("A", end="")
                elif (i, j) == self.goal:
                    print("B", end="")
                elif solution is not None and (i, j) in solution:
                    print("*", end="")
                else:
                    print(" ", end="")
            print()
        print()

    def stringify(self, show_explored=False, show_distance=False):
        """Returns a string representing the maze."""

        solution = self.solution[1] if self.solution is not None else None
        result = ''
        for i, row in enumerate(self.walls):
            if i > 0:
                result += '\n'
            for j, col in enumerate(row):
                if j > 0:
                    result += ','
                if col:
                    result += '#'
                elif (i, j) == self.start:
                    result += 'A'    
                elif (i, j) == self.goal:
                    result += 'B'
                elif solution is not None and (i, j) in solution:
                    result += '*'
                    if show_distance:
                        result += f"{self.manhattan_distance((i, j))}"
                elif solution is not None and show_explored and (i, j) in self.explored:
                    result += 'x'
                    if show_distance:
                        result += f"{self.manhattan_distance((i, j))}"
                else:
                    result += ' '
                    if show_distance:
                        result += f"{self.manhattan_distance((i, j))}"
        return result

    def neighbors(self, state):
        "Returns the next possible moves for a given state."

        row, col = state
        candidates = [
            ("up", (row - 1, col)),
            ("down", (row + 1, col)),
            ("left", (row, col - 1)),
            ("right", (row, col + 1))
        ]

        result = []
        for action, (r, c) in candidates:
            if 0 <= r < self.height and 0 <= c < self.width and not self.walls[r][c]:
                result.append((action, (r, c)))
        return result
    
    def manhattan_distance(self, state):
        """ Calculates the Manhattan distance from a given state to the goal """
        return abs(state[0] - self.goal[0]) + abs(state[1] - self.goal[1])

    def solve(self, algorithm):
        """Finds a solution to maze, if one exists."""

        # Keep track of number of states explored
        self.num_explored = 0

        # Initialize frontier to just the starting position
        start = Node(state=self.start, parent=None, action=None, distance=self.manhattan_distance(self.start))
        
        if algorithm == 'dfs':
            frontier = StackFrontier()
        elif algorithm == 'bfs':
            frontier = QueueFrontier()
        elif algorithm == 'gbfs':
            frontier = GreedyFrontier()
        elif algorithm == 'astar':
            frontier = StarFrontier()
        else:
            frontier = StackFrontier()
        
        frontier.add(start)

        # Initialize an empty explored set
        self.explored = set()

        # Keep looping until solution found
        while True:

            # If nothing left in frontier, then no path
            if frontier.empty():
                raise Exception("no solution")

            # Choose a node from the frontier
            node = frontier.remove()
            self.num_explored += 1

            # If node is the goal, then we have a solution
            if node.state == self.goal:
                actions = []
                cells = []
                while node.parent is not None:
                    actions.append(node.action)
                    cells.append(node.state)
                    node = node.parent
                actions.reverse()
                cells.reverse()
                self.solution = (actions, cells)
                return

            # Mark node as explored
            self.explored.add(node.state)

            # Add neighbors to frontier
            for action, state in self.neighbors(node.state):
                if not frontier.contains_state(state) and state not in self.explored:
                    child = Node(state=state, parent=node, action=action, distance=self.manhattan_distance(state))
                    frontier.add(child)
