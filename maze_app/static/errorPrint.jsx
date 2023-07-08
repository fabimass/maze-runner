const ErrorPrint = (props) => {
    
    return <div>
        { 
            props.type == "invalid" ?
                <div className="flex flex-col items-center px-3 sm:px-[200px]">
                    <img src={"/static/error-sign.png"} alt="runner" width={200} height={200} className="mr-1"/>
                    <h1 style={{fontFamily: "Courier"}} className="text-red-600 text-4xl sm:text-6xl">hmmm that doesn't look like a valid maze</h1>
                </div>
            : null
        }
        { 
            props.type == "no_result" ?
                <div className="flex flex-col items-center px-3 sm:px-[200px]">
                    <img src={"/static/error-sign.png"} alt="runner" width={200} height={200} className="mr-1"/>
                    <h1 style={{fontFamily: "Courier"}} className="text-red-600 text-4xl sm:text-6xl">whoops! couldn't find a solution for this one</h1>
                </div>
            : null
        }  
    </div>
}