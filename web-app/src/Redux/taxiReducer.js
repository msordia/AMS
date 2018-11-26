const initialState = {
	Marca: '',
	Modelo: '',
	Placas: '',
	Color: ''
}

const taxiReducer = (state = initialState, action) => {
	switch( action.type ) {
		case 'TaxiLogIn':
			return { Marca: action.payload.Marca, Modelo: action.payload.Modelo, Placas: action.payload.Placas, Color: action.payload.Color };
		default:
			return state;
	}
};

export default taxiReducer;