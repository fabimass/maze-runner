const MazePrint = (props) => {
    
    return <div>
        { props.content ?
            props.content.split('\n').map(row => <div className="flex">
                {row.split("").map(cell => <div className="w-20 h-20 border-4"></div>)}
            </div>)
            : null }
    </div>
}