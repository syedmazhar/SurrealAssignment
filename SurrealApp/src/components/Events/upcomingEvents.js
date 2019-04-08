import React from 'react';
import ReactDOM from "react-dom";
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import UpcomingEvent from "./components/upcomingEvent";

class UpcomingEvents extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items:[] };
    }
    render() {
      return (
        <Card>
            <CardBody className="cardNoPadding">
                
                <CardTitle className="cardTitle">Upcoming Events</CardTitle>

                <hr/>
                <div className="upcomingEventsSection">
                    <UpcomingEvent/>
                    <UpcomingEvent/>
                    <UpcomingEvent/>
                </div>
                <ListGroup>
                    <ListGroupItem className="grayAndCenter" tag="button" action>
                        SEE ALL UPCOMING EVENTS
                    </ListGroupItem>
                </ListGroup>
                
            </CardBody>
        </Card>
      );
    }
}
  
export default UpcomingEvents;