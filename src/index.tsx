import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
 
import Routes from './routes';
import { firebase } from './firebase';
// import { rootReducer } from './redux/reducers';

type Props = {
    user: firebase.User | null;
}
 
const App: React.FC<Props> = (props) => {
    return (
        <Router >
            <Routes {...props}/>
        </Router>
    )
}


firebase.auth().onAuthStateChanged(user => {
    ReactDOM.render(
        // <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
        // </Provider>, 
            <App user = {user} />, 
    document.getElementById('root'))
})
