const SettingsPrint = (props) => {
    
    return <div className="h-[100%] w-[100%] flex flex-col">
        <h1 className="text-4xl sm:text-6xl my-2 sm:my-5 text-white" style={{fontFamily: "Courier"}}>SETTINGS MENU</h1>
        <div className="flex grow ">
            <div className="flex flex-col w-[50%] border-r-2 border-white px-10">
                <h2 className="text-xl sm:text-2xl text-white text-left" style={{fontFamily: "Courier"}}>AI Algorithm:</h2>
                <label>
                    <input type="checkbox" /> Browser default
                </label>
            </div>
            <div className="flex flex-col w-[50%] px-10">
                <h2 className="text-xl sm:text-2xl text-white text-left" style={{fontFamily: "Courier"}}>Miscellaneous:</h2>
                <label className="text-white mt-10 text-left" style={{fontFamily: "Courier"}}>
                    <input type="checkbox" /> Show explored cells
                </label>
                <label className="text-gray-400 italic"> This will show the cells that were explored by the AI but that ultimately did not lead to the goal </label>
                <label className="text-white mt-10 text-left" style={{fontFamily: "Courier"}}>
                    <input type="checkbox" /> Show distance to the goal
                </label>
                <label className="text-gray-400 italic"> This will display the Manhattan distance to the goal in all the available cells </label>

                <div className="flex grow"></div>

                <h2 className="text-xl sm:text-2xl text-white text-left mb-5" style={{fontFamily: "Courier"}}>Maze templates:</h2>

                <button style={{fontFamily: "Courier"}} className="justify-center bg-emerald-500 hover:bg-emerald-700 text-white text-xl rounded-full mx-0 sm:mx-10 my-5">MAZE 1</button>
                <button style={{fontFamily: "Courier"}} className="justify-center bg-emerald-500 hover:bg-emerald-700 text-white text-xl rounded-full mx-0 sm:mx-10 my-5">MAZE 2</button>
                <button style={{fontFamily: "Courier"}} className="justify-center bg-emerald-500 hover:bg-emerald-700 text-white text-xl rounded-full mx-0 sm:mx-10 my-5">MAZE 3</button>
                <button style={{fontFamily: "Courier"}} className="justify-center bg-emerald-500 hover:bg-emerald-700 text-white text-xl rounded-full mx-0 sm:mx-10 my-5">MAZE 4</button>
            </div>
        </div>
        <div className="h-[120px]"></div>  
    </div>
}