import { LOAD_CLIENTS_SUCCESS } from 'src/constants';

const initialState = {
    clients: []
}

export const clientReducer = (state=initialState, action: any) =>{
    switch (action.type) {
        case LOAD_CLIENTS_SUCCESS:
            return { ...state,  clients: [...action.payload]}
        
        default:
            return state
    }
}