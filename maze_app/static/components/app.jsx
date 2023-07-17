const App = () => {
    
    return <ReactRedux.Provider store={store}>
        <MazeDesign />
    </ReactRedux.Provider>
}

ReactDOM.render(<App />, document.querySelector("#app"));