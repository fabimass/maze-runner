const App = () => {

    const [mazeDesign, setMazeDesign] = React.useState();
    const [mazeSolution, setMazeSolution] = React.useState();
    
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
        })
        .catch(error => {
            // Handle any errors that occurred during the request
            console.error(error);
        });

    }

    return <div>
        <textarea onChange={(event) => setMazeDesign(event.target.value)}></textarea>
        <button onClick={runMaze}>Run Maze</button>
        <MazePrint content={mazeSolution} />
    </div>

}

ReactDOM.render(<App />, document.querySelector("#app"));