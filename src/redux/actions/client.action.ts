import { LOAD_CLIENTS, ADD_CLIENT } from 'src/constants';

export function addClient(payload: {}) {
    return {
      type: ADD_CLIENT,
      payload
    }
}

export function loadClients(payload: any[]) {
  return {
    type: LOAD_CLIENTS,
    payload
  }
}