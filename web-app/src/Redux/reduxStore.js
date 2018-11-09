const redux = require('redux');
const createStore = redux.createStore;

//Initial State
const initialState = {
	loggedIn: false,
	userId: -1
}

//Reducer
const baseReducer = (state = initialState, action) => {
	return state;
};

//App Store
const store = createStore(baseReducer);
console.log(store.getState());