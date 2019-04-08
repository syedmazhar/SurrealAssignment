import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import "../node_modules/react-bootstrap/dist/react-bootstrap.min.js";
import React from "react";
import ReactDOM from "react-dom";
import './index.scss';
import * as serviceWorker from './serviceWorker';
import App from './components/App/app';
import Firebase, { FirebaseContext } from './components/Firebase/index';

ReactDOM.render(
    <FirebaseContext.Provider>
    <App  firebase={new Firebase()}/>
    </FirebaseContext.Provider>, 
    document.getElementById("appContainer"));  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

