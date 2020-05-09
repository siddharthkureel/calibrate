import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './redux/store';
import rootSaga from './redux/sagas';
import { getUser } from  './redux/actions/user.action';
import App from './App';

const store = configureStore();
store.runSaga(rootSaga)

store.dispatch(getUser());
 

ReactDOM.render(
    <Provider store = {store} >
        <App/>
    </Provider>, 
document.getElementById('root'))