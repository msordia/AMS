const initialState = {
	loggedIn: false,
	userId: -1,
	userName: '',
	userType: -1
}

const userReducer = (state = initialState, action) => {
	switch( action.type ) {
		case 'LogIn':
			return {loggedIn: true, userId: action.payload.uId, userName: action.payload.userName}
		default:
			return state;
	}
};

export default userReducer;