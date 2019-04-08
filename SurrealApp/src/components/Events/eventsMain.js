import React from 'react';
import ReactDOM from "react-dom";
import { Container, Row, Col } from 'reactstrap';
import UpcomingEvents from "./upcomingEvents";
import EventsYouMayLike from "./eventsYouMayLike";

class EventsMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items:[] };
    }
    render() {
      return (
        <Container className="mainContainer">
          <Row className="eventsSectionRowContainer">
            <Col xs={12}>
                <UpcomingEvents/>
            </Col>
          </Row>
          <Row className="eventsSectionRowContainer">
            <Col xs={12}>
                <EventsYouMayLike/>
            </Col>
          </Row>
        </Container>
      );
    }
}
  
export default EventsMain;