const SettingsPrint = (props) => {
    
    return <div className="h-[100%] flex flex-col">
        <h1 className="text-4xl sm:text-6xl my-2 sm:my-5 text-white" style={{fontFamily: "Courier"}}>SETTINGS MENU</h1>
        <div className="flex grow items-center">
            <label>
                <input type="checkbox" /> Browser default
            </label>
        </div>
        <div className="h-[120px]"></div>  
    </div>
}