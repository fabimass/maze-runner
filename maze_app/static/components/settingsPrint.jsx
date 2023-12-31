const SettingsPrint = (props) => {
    
    const dispatch = ReactRedux.useDispatch()
    const algorithm = ReactRedux.useSelector((state) => state.algorithm)
    const showExplored = ReactRedux.useSelector((state) => state.showExplored)
    const showDistance = ReactRedux.useSelector((state) => state.showDistance)
    const maze = ReactRedux.useSelector((state) => state.maze)

    const first_maze = "#####B#\n##### #\n####  #\n#### ##\n     ##\nA######"
    const second_maze = "#          B\n# ######### \n# #       # \n# # ##### # \n#   #     # \n### # ##### \nA   #       "
    const third_maze = "##    #\n## ## #\n#B #  #\n# ## ##\n     ##\nA######"
    const fourth_maze = "###                 #########\n#   ###################   # #\n# ####                # # # #\n# ################### # # # #\n#                     # # # #\n##################### # # # #\n#   ##                # # # #\n# # ## ### ## ######### # # #\n# #    #   ##B#         # # #\n# # ## ################ # # #\n### ##             #### # # #\n### ############## ## # # # #\n###             ##    # # # #\n###### ######## ####### # # #\n###### ####             #   #\nA      ######################"
    
    return <div className="h-[100%] w-[100%] flex flex-col">
        <h1 className="text-2xl sm:text-6xl my-0 sm:my-5 text-white" style={{fontFamily: "Courier"}}>SETTINGS MENU</h1>
        <div className="sm:flex grow mt-3 sm:mt-5">
            <div className="flex flex-col w-[100%] sm:w-[50%] sm:border-r-2 border-white px-5 sm:px-10">
                <h2 className="text-base sm:text-2xl text-white text-left" style={{fontFamily: "Courier"}}>AI Algorithm:</h2>
                <form className="flex flex-col">
                    <div className="mt-3 sm:mt-10 text-left">
                        <input type="radio" id="dfs" name="ai_algorithm" className="peer/dfs accent-emerald-500" value="dfs" checked={algorithm=="dfs"} onClick={() => dispatch({ type: 'select-dfs' })}/>
                        <label for="dfs" className="peer-checked/dfs:text-emerald-500 text-white text-sm sm:text-base" style={{fontFamily: "Courier"}}> Depth-First Search </label>
                    </div>
                    <label className="text-gray-400 italic text-xs sm:text-base"> The AI will explore as far as possible along each branch before backtracking </label>
                    <div className="mt-5 sm:mt-10 text-left">
                        <input type="radio" id="bfs" name="ai_algorithm" className="peer/bfs accent-emerald-500" value="bfs" checked={algorithm=="bfs"} onClick={() => dispatch({ type: 'select-bfs' })}/>
                        <label for="bfs" className="peer-checked/bfs:text-emerald-500 text-white text-sm sm:text-base" style={{fontFamily: "Courier"}}> Breadth-First Search </label>
                    </div>
                    <label className="text-gray-400 italic text-xs sm:text-base"> The AI will explore all the nodes at the present depth prior to moving on to the next depth level </label>
                    <div className="mt-5 sm:mt-10 text-left">
                        <input type="radio" id="gbfs" name="ai_algorithm" className="peer/gbfs accent-emerald-500" value="gbfs" checked={algorithm=="gbfs"} onClick={() => dispatch({ type: 'select-gbfs' })}/>
                        <label for="gbfs" className="peer-checked/gbfs:text-emerald-500 text-white text-sm sm:text-base" style={{fontFamily: "Courier"}}> Greedy Best-First Search </label>
                    </div>
                    <label className="text-gray-400 italic text-xs sm:text-base"> The AI will evaluate the distance to the goal of each possible path, choosing the one with the lowest distance </label>
                    <div className="mt-5 sm:mt-10 text-left">
                        <input type="radio" id="astar" name="ai_algorithm" className="peer/astar accent-emerald-500" value="astar" checked={algorithm=="astar"} onClick={() => dispatch({ type: 'select-astar' })}/>
                        <label for="astar" className="peer-checked/astar:text-emerald-500 text-white text-sm sm:text-base" style={{fontFamily: "Courier"}}> A* Search </label>
                    </div>
                    <label className="text-gray-400 italic text-xs sm:text-base"> The AI will evaluate not only the estimated distance to the goal, but also how far it had to travel to reach the current point </label>
                </form>

                <div className="invisible sm:visible flex grow"></div>
                <button onClick={props.onReady} style={{fontFamily: "Courier"}} className="invisible sm:visible justify-center bg-emerald-500 hover:bg-emerald-700 text-white text-base sm:text-xl rounded-full mx-0 sm:mx-10 my-2 sm:my-5">Ready!</button>
                <div className="invisible sm:visible flex grow"></div>

            </div>
            <div className="flex flex-col w-[100%] sm:w-[50%] px-5 sm:px-10">
                <h2 className="text-base sm:text-2xl text-white text-left" style={{fontFamily: "Courier"}}>Miscellaneous:</h2>
                <form className="flex flex-col">
                    <div className="mt-3 sm:mt-10 text-left">
                        <input type="checkbox" className="peer/show-explored accent-emerald-500" checked={showExplored} onClick={() => dispatch({ type: 'toggle-show-explored' })}/>
                        <label className="peer-checked/show-explored:text-emerald-500 text-white text-sm sm:text-base" style={{fontFamily: "Courier"}}> Show explored cells </label>
                    </div>
                    <label className="text-gray-400 italic text-xs sm:text-base"> This will show the cells that were explored by the AI but that ultimately did not lead to the goal </label>
                    <div className="mt-5 sm:mt-10 text-left">
                        <input type="checkbox" className="peer/show-distance accent-emerald-500" checked={showDistance} onClick={() => dispatch({ type: 'toggle-show-distance' })}/>
                        <label className="peer-checked/show-distance:text-emerald-500 text-white text-sm sm:text-base" style={{fontFamily: "Courier"}}> Show distance to the goal </label>
                    </div>
                    <label className="text-gray-400 italic text-xs sm:text-base"> This will display the Manhattan distance to the goal in all the available cells </label>
                </form>

                <div className="flex grow"></div>

                <h2 className="text-base sm:text-2xl text-white text-left mb-3 sm:mb-5 mt-10 sm:mt-0" style={{fontFamily: "Courier"}}>Maze templates:</h2>

                <button onClick={() => dispatch({type: "update-maze", payload: first_maze})} style={{fontFamily: "Courier"}} className={(maze==first_maze) ? "justify-center bg-emerald-500 hover:bg-emerald-700 text-white text-base sm:text-xl rounded-full mx-0 sm:mx-10 my-2 sm:my-5" : "justify-center bg-slate-500 hover:bg-slate-700 text-white text-base sm:text-xl rounded-full mx-0 sm:mx-10 my-2 sm:my-5"}>MAZE 1</button>
                <button onClick={() => dispatch({type: "update-maze", payload: second_maze})} style={{fontFamily: "Courier"}} className={(maze==second_maze) ? "justify-center bg-emerald-500 hover:bg-emerald-700 text-white text-base sm:text-xl rounded-full mx-0 sm:mx-10 my-2 sm:my-5" : "justify-center bg-slate-500 hover:bg-slate-700 text-white text-base sm:text-xl rounded-full mx-0 sm:mx-10 my-2 sm:my-5"}>MAZE 2</button>
                <button onClick={() => dispatch({type: "update-maze", payload: third_maze})} style={{fontFamily: "Courier"}} className={(maze==third_maze) ? "justify-center bg-emerald-500 hover:bg-emerald-700 text-white text-base sm:text-xl rounded-full mx-0 sm:mx-10 my-2 sm:my-5" : "justify-center bg-slate-500 hover:bg-slate-700 text-white text-base sm:text-xl rounded-full mx-0 sm:mx-10 my-2 sm:my-5"}>MAZE 3</button>
                <button onClick={() => dispatch({type: "update-maze", payload: fourth_maze})} style={{fontFamily: "Courier"}} className={(maze==fourth_maze) ? "justify-center bg-emerald-500 hover:bg-emerald-700 text-white text-base sm:text-xl rounded-full mx-0 sm:mx-10 my-2 sm:my-5" : "justify-center bg-slate-500 hover:bg-slate-700 text-white text-base sm:text-xl rounded-full mx-0 sm:mx-10 my-2 sm:my-5"}>MAZE 4</button>

                <button onClick={props.onReady} style={{fontFamily: "Courier"}} className="visible sm:invisible justify-center bg-emerald-500 hover:bg-emerald-700 text-white text-base sm:text-xl rounded-full mx-0 my-2 sm:my-0">Ready!</button>

            </div>
        </div>
        <div className="h-[120px]"></div>  
    </div>
}