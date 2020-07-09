import { 
  LOAD_CLIENTS, 
  LOAD_CLIENTS_FAILURE, 
  LOAD_CLIENTS_SUCCESS,
  ADD_CLIENT, 
  ADD_CLIENT_FAILURE, 
  ADD_CLIENT_SUCCESS
} from 'src/constants';

export const loadClients = () => ({ type: LOAD_CLIENTS })
export const loadClientsSuccess = (payload: Array<object>) => ({ type: LOAD_CLIENTS_SUCCESS, payload })
export const loadClientsFailure = (payload: any) => ({ type: ADD_CLIENT_FAILURE, payload })

export const addClient = (payload: any) => ({ type: ADD_CLIENT, payload })
export const addClientSuccess = () => ({ type: ADD_CLIENT_SUCCESS })
export const addClientFailure = () => ({ type: LOAD_CLIENTS_FAILURE })
