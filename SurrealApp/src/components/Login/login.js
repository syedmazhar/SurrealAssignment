import React from "react";
import ReactDOM from "react-dom";
import style from "./login.scss";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';
import UserProfile from '../../session/UserProfile';
import { withRouter } from 'react-router-dom';

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
    loggedIn: false
};

class Login extends React.Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleLogin = () => (e) => { 
        const { email, password } = this.state;
        this.props.firebase
          .doSignInWithEmailAndPassword(email, password)
          .then(() => {
            console.log("signed in");
            //this.setState({ email: email, loggedIn: true });
            UserProfile.setUserID(email);
            this.props.history.push(ROUTES.HOME);
            this.props.onChange([true]);
          })
          .catch(error => {
            console.log(error.message);
            this.setState({ error });
          });
    
        e.preventDefault();
    }
    
    render(){
        if (this.state.loggedIn === true) {
            return <Redirect to={ROUTES.HOME} />
        }
        const { email, password, error } = this.state;
        const isInvalid = password === '' || email === '';
        return (
            <div className="divLoginMainContainer formInputsContainer">
                    <Form className="loginForm">
                        <div className="headingStyle"><h3>Sign In</h3></div>
                        <div className="childDivStyle">
                            <div>
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input type="email" name="email" value={email} placeholder="Email" onChange={this.onChange} />
                                </FormGroup>
                            </div>
                            <div>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input type="password" name="password" placeholder="Password" value={password} onChange={this.onChange} />
                                </FormGroup>
                            </div>
                            <div className="forgotPwdStyle">
                                <span>Forgot Password ?</span>
                            </div>
                        </div>
                        <div className="divBtnContainer">
                            <Button onClick={this.handleLogin()} className="btnStyle">Login</Button>
                            {/* {error && <p>{error.message}</p>} */}
                        </div>
                    </Form>
            </div>
        );
    } 
};

export default Login;
