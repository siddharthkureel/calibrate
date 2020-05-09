import { LOAD_CLIENTS } from 'src/constants';

const initialState = {}

export const clientReducer = (state=initialState, action: any) =>{
    switch (action.type) {
        case LOAD_CLIENTS:
            return { ...state,  loadClients: action.payload}
        
        default:
            return state
    }
}