const App = () => {

    const [mazeSolution, setMazeSolution] = React.useState();

    const runMaze = () => {
        
        fetch('/run', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'X-CSRFToken': CSRF_TOKEN
            },
            body: JSON.stringify({
                maze: "..."
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
            setMazeSolution(data.result);
        })
        .catch(error => {
            // Handle any errors that occurred during the request
            console.error(error);
        });

    }

    return <div>
        <textarea></textarea>
        <button onClick={runMaze}>Run Maze</button>
        <Blabla />
        <div>{mazeSolution}</div>
    </div>

}

ReactDOM.render(<App />, document.querySelector("#app"));