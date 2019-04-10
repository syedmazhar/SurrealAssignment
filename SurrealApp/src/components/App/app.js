import React from "react";
import ReactDOM from "react-dom";
import Login from "../Login/login.js";
import Header from "../Dashboard/header";
import AppBodyContainer from "../Dashboard/appBodyContainer";
import './app.scss';

//Initialize necessary Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye,faSearch, faGamepad, faWineGlassAlt, faRuler,
    faBasketballBall, faMusic, faCloudSun, faCalendarMinus, faCalendar,
    faCheck, faQuestion, faTimes, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
library.add(faBullseye)
library.add(faSearch);
library.add(faGamepad)
library.add(faWineGlassAlt);
library.add(faRuler);
library.add(faBasketballBall);
library.add(faMusic);
library.add(faCloudSun);
library.add(faCalendarMinus);
library.add(faCalendar);
library.add(faCheck);
library.add(faQuestion);
library.add(faTimes);
library.add(faEllipsisV);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [],
            arrLogin: []
          };
    }
    
    render() {
        let fb = this.props.firebase;
        let history = this.state.history;
        return (
                <div className="fullHeight">
                    {/* {this.state.arrLogin.length == 1 && this.state.arrLogin[0] == true ?  */}
                        <div>
                            <header className="app-header navbar dbHeader" >
                                <Header firebase={fb} onChange={data => {this.setState({ arrLogin: data })}} />
                            </header>
                            <div className="app-body row dbBodyContainer"><AppBodyContainer /></div>
                        </div>
                        {/* :
                        <Login firebase={fb} history={history} onChange={data => {this.setState({ arrLogin: data })}}/>
                    } */}
                </div>
            );
    }
}

export default App;


