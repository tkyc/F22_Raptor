import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import persistedStore from './utils/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import Loader from './components/common/loader/loader';

ReactDOM.render(<Provider store={persistedStore().store}>
                    <PersistGate loading={<Loader/>}  persistor={persistedStore().persistor}>
                        <BrowserRouter>
                            <App/>
                        </BrowserRouter>
                    </PersistGate>
                </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
