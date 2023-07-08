const App = () => {

    const [mazeDesign, setMazeDesign] = React.useState("#####B#\n##### #\n####  #\n#### ##\n     ##\nA######");
    const [mazeSolution, setMazeSolution] = React.useState();
    const [showModal, setShowModal] = React.useState(false);

    const closeModal = () => setShowModal(false);
    const openModal = () => setShowModal(true);

    const runMaze = () => {
        
        fetch('/run', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'X-CSRFToken': CSRF_TOKEN
            },
            body: JSON.stringify({
                maze: mazeDesign
            }),
        })
        .then(response => {
            // Handle the response from the server
            if (response.ok) {
                // Request successful
                return response.json();
            } else {
                // Request failed
                throw new Error('Request failed');
            }
        })
        .then(data => {
            // Handle the data received from the server
            console.log("Maze solution:");
            console.log(data.result);
            setMazeSolution(data.result);
            openModal();
        })
        .catch(error => {
            // Handle any errors that occurred during the request
            console.error(error);
        });

    }

    return <div className="bg-slate-700 h-screen flex flex-col sm:justify-center items-center">
        <span className="text-4xl sm:text-6xl my-2 sm:my-5" style={{fontFamily: "Courier"}}>DESIGN YOUR MAZE</span>
        <textarea className="w-[95%] sm:w-[50%] h-[50%] bg-slate-900 text-white p-2 border-2 grow sm:grow-0" style={{fontFamily: "Courier"}} onChange={(event) => setMazeDesign(event.target.value)} value={mazeDesign}></textarea>
        <button onClick={runMaze} style={{fontFamily: "Courier"}} className="my-2 w-[95%] sm:w-[100px] flex justify-center sm:my-5 py-2 bg-slate-900 text-white text-xl rounded-full">
            <div className="flex">
                <img src={"/static/runner-white.png"} alt="runner" width={28} height={28} className="mr-1"/>
                <span>RUN</span>
            </div>
        </button>
        
        { showModal ? <Modal content={mazeSolution} closeModal={closeModal} /> : null }
        
    </div>

}

ReactDOM.render(<App />, document.querySelector("#app"));