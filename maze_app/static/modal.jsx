
const Modal = (props) => {
    
    return <div className="fixed inset-0">
        <div className="flex justify-center max-h-[100%] py-4 px-4 text-center">
            
            <div className="fixed inset-0 bg-gray-700 bg-opacity-75"></div>

            <div className="inline-block bg-slate-900 rounded-lg overflow-hidden shadow-xl transform transition-all min-w-[75%]">
                <div className="text-right pr-1">
                    <button onClick={props.closeModal}>❌</button>
                </div>
                
                <div className="flex flex-col h-screen items-center">
                    <div className="grow"></div>
                    <MazePrint content={props.content} />
                    <div className="grow"></div>
                </div>
            </div>
            
        </div> 
    </div>
}