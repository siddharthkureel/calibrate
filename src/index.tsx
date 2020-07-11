import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Amplify } from 'aws-amplify';

import { config } from './config';
import configureStore from './redux/store';
import rootSaga from './redux/sagas';
import { getUser } from  './redux/actions/user.action';
import App from './App';

const store = configureStore();
store.runSaga(rootSaga);
store.dispatch(getUser());

Amplify.configure({
    Auth: {
      mandatorySignIn: true,
      region: config.cognito.REGION,
      userPoolId: config.cognito.USER_POOL_ID,
      userPoolWebClientId: config.cognito.APP_CLIENT_ID
    }
});
ReactDOM.render(
    <Provider store = {store} >
        <App/>
    </Provider>, 
document.getElementById('root'));