const MazePrint = () => {

    const mazeSolution = ReactRedux.useSelector((state) => state.solution)
    const dims = mazeSolution.width * mazeSolution.height

    let wall_cell_style = ""
    let start_cell_style = ""
    let goal_cell_style = ""
    let solution_cell_style = ""
    let explored_cell_style = ""
    let empty_cell_style = ""

    if (dims < 100){
        wall_cell_style = "w-8 h-8 sm:w-20 sm:h-20 border-2 sm:border-4 border-slate-900 bg-slate-700"
        start_cell_style = "w-8 h-8 sm:w-20 sm:h-20 border-2 sm:border-4 border-slate-900 bg-emerald-300"
        goal_cell_style = "w-8 h-8 sm:w-20 sm:h-20 border-2 sm:border-4 border-slate-900 bg-emerald-700 justify-center items-center flex"
        solution_cell_style = "w-8 h-8 sm:w-20 sm:h-20 border-2 sm:border-4 border-slate-900 bg-emerald-500 justify-center items-center flex"
        explored_cell_style = "w-8 h-8 sm:w-20 sm:h-20 border-2 sm:border-4 border-slate-900 bg-red-500 justify-center items-center flex text-white"
        empty_cell_style = "w-8 h-8 sm:w-20 sm:h-20 border-2 sm:border-4 border-slate-900 justify-center items-center flex text-white"
    }
    else if (dims >= 100 && dims < 450){
        wall_cell_style = "w-4 h-4 sm:w-10 sm:h-10 border-2 sm:border-4 border-slate-900 bg-slate-700"
        start_cell_style = "w-4 h-4 sm:w-10 sm:h-10 border-2 sm:border-4 border-slate-900 bg-emerald-300"
        goal_cell_style = "w-4 h-4 sm:w-10 sm:h-10 border-2 sm:border-4 border-slate-900 bg-emerald-700 justify-center items-center flex"
        solution_cell_style = "w-4 h-4 sm:w-10 sm:h-10 border-2 sm:border-4 border-slate-900 bg-emerald-500 justify-center items-center flex"
        explored_cell_style = "w-4 h-4 sm:w-10 sm:h-10 border-2 sm:border-4 border-slate-900 bg-red-500 justify-center items-center flex text-white"
        empty_cell_style = "w-4 h-4 sm:w-10 sm:h-10 border-2 sm:border-4 border-slate-900 justify-center items-center flex text-white"
    }
    else {
        wall_cell_style = "w-3 h-3 sm:w-5 sm:h-5 border-1 sm:border-2 border-slate-900 bg-slate-700"
        start_cell_style = "w-3 h-3 sm:w-5 sm:h-5 border-1 sm:border-2 border-slate-900 bg-emerald-300"
        goal_cell_style = "w-3 h-3 sm:w-5 sm:h-5 border-1 sm:border-2 border-slate-900 bg-emerald-700 justify-center items-center flex"
        solution_cell_style = "w-3 h-3 sm:w-5 sm:h-5 border-1 sm:border-2 border-slate-900 bg-emerald-500 justify-center items-center flex"
        explored_cell_style = "w-3 h-3 sm:w-5 sm:h-5 border-1 sm:border-2 border-slate-900 bg-red-500 justify-center items-center flex text-white"
        empty_cell_style = "w-3 h-3 sm:w-5 sm:h-5 border-1 sm:border-2 border-slate-900 justify-center items-center flex text-white"
    }
    
    return <div className="h-[100%] w-[100%] flex flex-col">
        <h1 className="text-2xl sm:text-6xl my-0 sm:my-5 text-emerald-500" style={{fontFamily: "Courier"}}>Solved!</h1>
        <div className="grow"></div>
        <div className="mx-auto">
        { mazeSolution.result ?
            mazeSolution.result.split('\n').map(
                row => <div className="flex">
                    {row.split(",").map(cell => {
                        const isSolution = cell.match(/\*(\d*)/)
                        const isExplored = cell.match(/x(\d*)/)
                        const isEmpty = cell.match(/\s(\d*)/)
                        if (cell == '#'){
                            return <div className={wall_cell_style}></div>
                        }
                        else if (cell == 'A'){
                            return <div className={start_cell_style}></div>
                        }
                        else if (cell == 'B'){
                            return <div className={goal_cell_style}><img src={"/static/img/runner.png"} alt="runner icon" className="mr-1 w-[90%] h-[90%]"/></div>
                        }
                        else if (isSolution){
                            return <div className={solution_cell_style}>{isSolution[1]}</div>
                        }
                        else if (isExplored){
                            return <div className={explored_cell_style}>{isExplored[1]}</div>
                        }
                        else {
                            return <div className={empty_cell_style}>{isEmpty[1]}</div>
                        }
                    })}
                </div>)
            : null }
        </div>
        <div className="grow"></div>
        <div className="grow"></div>
    </div>
}