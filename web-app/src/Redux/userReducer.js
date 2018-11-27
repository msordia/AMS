const initialState = {
	loggedIn: false,
	ID: -1, 
	correo: '', 
	Nombre: '', 
	FechaNacimiento: '', 
	Sexo: '', 
	Telefono: ''
}

const userReducer = (state = initialState, action) => {
	switch( action.type ) {
		case 'LogIn':
			return {loggedIn: true, ID: action.payload.ID, correo: action.payload.correo, Nombre: action.payload.Nombre, FechaNacimiento: action.payload.FechaNacimiento, Sexo: action.payload.Sexo, Telefono: action.payload.Telefono}
		case 'actualizarPefil':
			return {loggedIn: true, ID: state.ID, FechaNacimiento: state.FechaNacimiento, correo: action.payload.correo, Nombre: action.payload.nombre, Sexo: action.payload.sexo, Telefono: action.payload.telefono}
		default:
			return state;
	}
};

export default userReducer;