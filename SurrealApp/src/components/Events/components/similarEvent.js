import React from 'react';
import ReactDOM from "react-dom";
import { Container, Row, Col } from 'reactstrap';
import { ButtonToolbar, ButtonGroup, Button } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './similarEvent.scss';

class SimilarEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items:[] };
    }
    render() {
      return (
        <Card className="similarEventContainer">
            <CardBody className="cardNoPadding">
                <div className="eventDetailsContainer">
                    <div>
                        <Container className="eventImageContainer">
                                <Row className="rowContainerZeroMargin">
                                    <Col xs={12}>
                                            <img className="eventImage" src="../../../../images/SurfMeetup.jpg" alt="Surf Meetup"/>
                                    </Col>
                                </Row>
                        </Container>
                    </div>
                    <div>
                        <Container className="eventInfoContainer">
                            <Row className="rowContainerZeroMargin eventRowContainer">
                                <Col xs={3} className="eventDateColumn">
                                    <div className="eventDateBox d-table-cell align-middle">
                                        <div className="eventDay">THU</div>
                                        <div className="eventDate">23</div>
                                    </div>
                                </Col>
                                <Col xs={9} className="colEventDetails">
                                    <div className="eventTitle">Santa Meetup</div>
                                    <div className="eventDateAndTime">Sat 16 Jun, Blue Bay</div>
                                    <div><span className="readOnlyText">1,254 people interested</span></div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <hr className="separtorWithNoMargins"/>
                <div className="eventActionContainer">
                    <Container className="mainContainer">
                        <Row>
                            <Col xs={6}>
                                <Button className="eventbutton" outline color="secondary">                            
                                    Interested
                                </Button>
                            </Col>
                            <Col xs={6}>
                                    <span className="readOnlyText">7 friends are going</span>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </CardBody>
        </Card>
      );
    }
}
  
export default SimilarEvent;