import { combineReducers } from 'redux';

import { clientReducer } from './client.reducer';
import { userReducer } from './user.reducer';

const rootReducer = combineReducers({
  client: clientReducer,
  userStatus: userReducer
})

export default rootReducer;