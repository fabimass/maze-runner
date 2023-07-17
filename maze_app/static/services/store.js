const initialState = {
    algorithm: "dfs"
};

function rootReducer(state = initialState, action) {
  
  switch(action.type){

    case 'select-dfs':
        return {...state, algorithm: "dfs"}
    case 'select-bfs':
        return {...state, algorithm: "bfs"}
    case 'select-gbfs':
        return {...state, algorithm: "gbfs"}
    case 'select-astar':
        return {...state, algorithm: "astar"}
    default:
        return state
  }
}

const store = Redux.createStore(rootReducer);