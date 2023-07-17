const initialState = {
    algorithm: "dfs"
};

function rootReducer(state = initialState, action) {
  // Implement your reducer logic here
  return state;
}

const store = Redux.createStore(rootReducer);