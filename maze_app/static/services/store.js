const initialState = {
    algorithm: "dfs",
    showExplored: false,
    showDistance: false,
    maze: ""
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
    case 'toggle-show-distance':
        return {...state, showDistance: !state.showDistance}
    case 'toggle-show-explored':
        return {...state, showExplored: !state.showExplored}
    case 'update-maze':
        return {...state, maze: action.payload}
    default:
        return state
  }
}

const store = Redux.createStore(rootReducer);