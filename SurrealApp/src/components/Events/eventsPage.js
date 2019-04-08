import React from 'react';
import ReactDOM from "react-dom";
import { Container, Row, Col } from 'reactstrap';
import ExploreEvents from "./exploreEvents";
import EventsMain from "./eventsMain";
import './events.scss';

class mainContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items:[] };
    }
    
    render() {
      return (
        <Container className="mainContainer">
          <Row className="dbMainRowContainer">
            <Col xs={7}>
                <EventsMain/>
            </Col>
            <Col xs={5}>
                <ExploreEvents/>
            </Col>
          </Row>
        </Container>
      );
    }
}
  
export default mainContainer;