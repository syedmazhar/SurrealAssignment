import React from 'react';
import ReactDOM from "react-dom";
import {Navbar, Container, Row, Col } from 'reactstrap';
import {FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.scss';
import UserProfile from '../../session/UserProfile';

class ToolBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  handleLogout = () => (e) => { 

    this.props.firebase.doSignOut()
        .then(() => {
          console.log("signed out");
          this.props.onChange([false]);
          e.preventDefault();
        })
        .catch(error => {
          console.log(error.message);
        });
  }

  render() {
    return (
      <Container className="rowsColsContainer">
        <Row className="rowContainer">
          <Col xs={2} className="font-weight-bold brandNameContainer">
              <FontAwesomeIcon className="brandIcon" icon="bullseye" />
              <span className="brandName">Socialio</span>
          </Col>
          <Col xs={7} className="dottedLeftBorder">
            <Row className="rowContainer">
              <Col xs={1} className="searchIconContainer"><FontAwesomeIcon className="searchIcon" icon="search" /></Col>
              <Col xs={11} className="searchFieldContainer"><FormControl type="text" placeholder="Search..." className="searchField" /></Col>
            </Row>
          </Col>
          <Col xs={3} className="font-weight-bold text-right">
              <span className="userName">{UserProfile.getUserID()}</span>
              <Button outline color="secondary" onClick={this.handleLogout()}>Log Out</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}



export default ToolBar;