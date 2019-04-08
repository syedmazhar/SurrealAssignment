import React from 'react';
import ReactDOM from "react-dom";
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import './events.scss';

class ExploreEvents extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items:[] };
    }
    render() {
      return (
        <Card>
            <CardBody className="cardNoPadding">
                
                <CardTitle className="cardTitle">Explore Events</CardTitle>

                <hr/>

                <Container className="quickEventsContainer">
                    <Row className="rowContainerZeroMargin">
                        <Col xs={6} className="colContainer">
                            <div className="quickEventBox eventsToday  d-table-cell align-middle">
                                <div><FontAwesomeIcon className="quickEventIcon" icon="cloud-sun" /></div>
                                <div className="quickEventTitle">Today</div>
                            </div>
                        </Col>
                        <Col xs={6} className="colContainer">
                            <div className="quickEventBox eventsTomorrow d-table-cell align-middle">
                                <div><FontAwesomeIcon className="quickEventIcon" icon="cloud-sun" /></div>
                                <div className="quickEventTitle">Tomorrow</div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="rowContainerZeroMargin">
                        <Col xs={6} className="colContainer">
                            <div className="quickEventBox eventsThisWeek d-table-cell align-middle">
                                <div><FontAwesomeIcon className="quickEventIcon" icon="calendar-minus" /></div>
                                <div className="quickEventTitle">This Week</div>
                            </div>
                        </Col>
                        <Col xs={6} className="colContainer">
                            <div className="quickEventBox eventsChooseDate d-table-cell align-middle">
                                <div><FontAwesomeIcon className="quickEventIcon" icon="calendar" /></div>
                                <div className="quickEventTitle">Choose Date</div>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <ListGroup>
                    <ListGroupItem className="listItem" tag="button" action>
                        <FontAwesomeIcon className="iconInListItem" icon="gamepad" />
                        Nerd Parties
                    </ListGroupItem>
                    <ListGroupItem className="listItem" tag="button" action>
                        <FontAwesomeIcon className="iconInListItem" icon="wine-glass-alt" />
                        Party
                    </ListGroupItem>
                    <ListGroupItem className="listItem" tag="button" action>
                        <FontAwesomeIcon className="iconInListItem" icon="ruler" />
                        Crafts
                    </ListGroupItem>
                    <ListGroupItem className="listItem" tag="button" action>
                        <FontAwesomeIcon className="iconInListItem" icon="basketball-ball" />
                        Sports
                    </ListGroupItem>
                    <ListGroupItem className="listItem" tag="button" action>
                        <FontAwesomeIcon className="iconInListItem" icon="music" />
                        Dance
                    </ListGroupItem>
                    <ListGroupItem className="grayAndCenter" tag="button" action>
                        MORE EVENTS
                    </ListGroupItem>
                </ListGroup>
                
            </CardBody>
        </Card>
      );
    }
}
  
export default ExploreEvents;