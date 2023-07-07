const MazePrint = (props) => {
    
    return <div>
        { props.content ?
            props.content.split('\n').map(
                row => <div className="flex">
                    {row.split("").map(cell => {
                        if (cell == '#'){
                            return <div className="w-10 h-10 border-4 bg-slate-700"></div>
                        }
                        else if (cell == 'A'){
                            return <div className="w-10 h-10 border-4 bg-teal-500"></div>
                        }
                        else if (cell == 'B'){
                            return <div className="w-10 h-10 border-4 bg-green-500"></div>
                        }
                        else if (cell == '*'){
                            return <div className="w-10 h-10 border-4 bg-violet-500"></div>
                        }
                        else if (cell == 'x'){
                            return <div className="w-10 h-10 border-4 bg-red-500"></div>
                        }
                        else {
                            return <div className="w-10 h-10 border-4"></div>
                        }
                    })}
                </div>)
            : null }
    </div>
}