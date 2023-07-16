const SettingsPrint = (props) => {
    
    return <div className="h-[100%] w-[100%] flex flex-col">
        <h1 className="text-2xl sm:text-6xl my-0 sm:my-5 text-white" style={{fontFamily: "Courier"}}>SETTINGS MENU</h1>
        <div className="sm:flex grow mt-3 sm:mt-5">
            <div className="flex flex-col w-[100%] sm:w-[50%] sm:border-r-2 border-white px-5 sm:px-10">
                <h2 className="text-base sm:text-2xl text-white text-left" style={{fontFamily: "Courier"}}>AI Algorithm:</h2>
                <form className="flex flex-col">
                    <div className="mt-3 sm:mt-10 text-left">
                        <input type="radio" id="dfs" name="ai_algorithm" value="dfs"/>
                        <label for="dfs" className="text-white text-sm sm:text-base" style={{fontFamily: "Courier"}}> Depth-First Search </label>
                    </div>
                    <label className="text-gray-400 italic text-xs sm:text-base"> The AI will explore as far as possible along each branch before backtracking </label>
                    <div className="mt-5 sm:mt-10 text-left">
                        <input type="radio" id="bfs" name="ai_algorithm" value="bfs"/>
                        <label for="bfs" className="text-white text-sm sm:text-base" style={{fontFamily: "Courier"}}> Breadth-First Search </label>
                    </div>
                    <label className="text-gray-400 italic text-xs sm:text-base"> The AI will explore all the nodes at the present depth prior to moving on to the next depth level </label>
                    <div className="mt-5 sm:mt-10 text-left">
                        <input type="radio" id="gbfs" name="ai_algorithm" value="gbfs"/>
                        <label for="gbfs" className="text-white text-sm sm:text-base" style={{fontFamily: "Courier"}}> Greedy Best-First Search </label>
                    </div>
                    <label className="text-gray-400 italic text-xs sm:text-base"> The AI will evaluate the distance to the goal of each possible path, choosing the one with the lowest distance </label>
                    <div className="mt-5 sm:mt-10 text-left">
                        <input type="radio" id="astar" name="ai_algorithm" value="astar"/>
                        <label for="astar" className="text-white text-sm sm:text-base" style={{fontFamily: "Courier"}}> A* Search </label>
                    </div>
                    <label className="text-gray-400 italic text-xs sm:text-base"> The AI will evaluate each possible path based on the distance to the goal plus the number of movements needed to get there, and then will choose the one with the lowest value </label>
                </form>
            </div>
            <div className="flex flex-col w-[100%] sm:w-[50%] px-5 sm:px-10 mt-10 sm:mt-0">
                <h2 className="text-base sm:text-2xl text-white text-left" style={{fontFamily: "Courier"}}>Miscellaneous:</h2>
                <form className="flex flex-col">
                    <div className="mt-3 sm:mt-10 text-left">
                        <input type="checkbox" />
                        <label className="text-white text-sm sm:text-base" style={{fontFamily: "Courier"}}> Show explored cells </label>
                    </div>
                    <label className="text-gray-400 italic text-xs sm:text-base"> This will show the cells that were explored by the AI but that ultimately did not lead to the goal </label>
                    <div className="mt-5 sm:mt-10 text-left">
                        <input type="checkbox" />
                        <label className="text-white text-sm sm:text-base" style={{fontFamily: "Courier"}}> Show distance to the goal </label>
                    </div>
                    <label className="text-gray-400 italic text-xs sm:text-base"> This will display the Manhattan distance to the goal in all the available cells </label>
                </form>

                <div className="flex grow"></div>

                <h2 className="text-base sm:text-2xl text-white text-left mb-3 sm:mb-5 mt-10 sm:mt-0" style={{fontFamily: "Courier"}}>Maze templates:</h2>

                <button style={{fontFamily: "Courier"}} className="justify-center bg-emerald-500 hover:bg-emerald-700 text-white text-base sm:text-xl rounded-full mx-0 sm:mx-10 my-2 sm:my-5">MAZE 1</button>
                <button style={{fontFamily: "Courier"}} className="justify-center bg-emerald-500 hover:bg-emerald-700 text-white text-base sm:text-xl rounded-full mx-0 sm:mx-10 my-2 sm:my-5">MAZE 2</button>
                <button style={{fontFamily: "Courier"}} className="justify-center bg-emerald-500 hover:bg-emerald-700 text-white text-base sm:text-xl rounded-full mx-0 sm:mx-10 my-2 sm:my-5">MAZE 3</button>
                <button style={{fontFamily: "Courier"}} className="justify-center bg-emerald-500 hover:bg-emerald-700 text-white text-base sm:text-xl rounded-full mx-0 sm:mx-10 my-2 sm:my-5">MAZE 4</button>
            </div>
        </div>
        <div className="h-[120px]"></div>  
    </div>
}