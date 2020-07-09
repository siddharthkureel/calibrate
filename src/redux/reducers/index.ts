import { combineReducers } from 'redux';

import { clientReducer } from './client.reducer';
import { userReducer } from './user.reducer';

const rootReducer = combineReducers({
  clientState: clientReducer,
  userState: userReducer
})

export default rootReducer;