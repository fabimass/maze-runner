const MazePrint = (props) => {

    const vdim = props.content.split('\n').length
    const hdim = props.content.split('\n')[0].split("").length
    const dims = vdim * hdim

    let wall = ""
    let start = ""
    let goal = ""
    let solution = ""
    let explored = ""
    let empty = ""

    if (dims < 100){
        wall = "w-5 h-5 sm:w-20 sm:h-20 border-2 sm:border-4 border-slate-900 bg-slate-700"
        start = "w-5 h-5 sm:w-20 sm:h-20 border-2 sm:border-4 border-slate-900 bg-teal-500"
        goal = "w-5 h-5 sm:w-20 sm:h-20 border-2 sm:border-4 border-slate-900 bg-green-500"
        solution = "w-5 h-5 sm:w-20 sm:h-20 border-2 sm:border-4 border-slate-900 bg-violet-500"
        explored = "w-5 h-5 sm:w-20 sm:h-20 border-2 sm:border-4 border-slate-900 bg-red-500"
        empty = "w-5 h-5 sm:w-20 sm:h-20 border-2 sm:border-4 border-slate-900"
    }
    else if (dims >= 100 && dims < 450){
        wall = "w-4 h-4 sm:w-10 sm:h-10 border-2 sm:border-4 border-slate-900 bg-slate-700"
        start = "w-4 h-4 sm:w-10 sm:h-10 border-2 sm:border-4 border-slate-900 bg-teal-500"
        goal = "w-4 h-4 sm:w-10 sm:h-10 border-2 sm:border-4 border-slate-900 bg-green-500"
        solution = "w-4 h-4 sm:w-10 sm:h-10 border-2 sm:border-4 border-slate-900 bg-violet-500"
        explored = "w-4 h-4 sm:w-10 sm:h-10 border-2 sm:border-4 border-slate-900 bg-red-500"
        empty = "w-4 h-4 sm:w-10 sm:h-10 border-2 sm:border-4 border-slate-900"
    }
    else {
        wall = "w-3 h-3 sm:w-5 sm:h-5 border-1 sm:border-2 border-slate-900 bg-slate-700"
        start = "w-3 h-3 sm:w-5 sm:h-5 border-1 sm:border-2 border-slate-900 bg-teal-500"
        goal = "w-3 h-3 sm:w-5 sm:h-5 border-1 sm:border-2 border-slate-900 bg-green-500"
        solution = "w-3 h-3 sm:w-5 sm:h-5 border-1 sm:border-2 border-slate-900 bg-violet-500"
        explored = "w-3 h-3 sm:w-5 sm:h-5 border-1 sm:border-2 border-slate-900 bg-red-500"
        empty = "w-3 h-3 sm:w-5 sm:h-5 border-1 sm:border-2 border-slate-900"
    }
    
    return <div>
        { props.content ?
            props.content.split('\n').map(
                row => <div className="flex">
                    {row.split("").map(cell => {
                        if (cell == '#'){
                            return <div className={wall}></div>
                        }
                        else if (cell == 'A'){
                            return <div className={start}></div>
                        }
                        else if (cell == 'B'){
                            return <div className={goal}></div>
                        }
                        else if (cell == '*'){
                            return <div className={solution}></div>
                        }
                        else if (cell == 'x'){
                            return <div className={explored}></div>
                        }
                        else {
                            return <div className={empty}></div>
                        }
                    })}
                </div>)
            : null }
    </div>
}