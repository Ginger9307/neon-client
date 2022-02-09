import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { SocketProvider } from './contexts/SocketProvider';
import store from './store';
import App from './App';
import './index.css';


ReactDOM.render(
    <React.StrictMode>
        <SocketProvider>
            <Provider store={store}>
                <Router>
                <App />
                </Router>
            </Provider>
        </SocketProvider>
    </React.StrictMode>,
document.getElementById("root")
);
