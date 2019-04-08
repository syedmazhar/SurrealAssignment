import React from 'react';
import ReactDOM from "react-dom";
import { Container, Row, Col } from 'reactstrap';
import { ButtonToolbar, ButtonGroup, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './upcomingEvent.scss';

class UpcomingEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items:[] };
    }
    render() {
      return (
        <Container className="eventContainer">
          <Row className="rowContainerZeroMargin eventRowContainer">
            <Col xs={2} className="eventDateColumn">
                <div className="eventDateBox d-table-cell align-middle">
                    <div className="eventDay">THU</div>
                    <div className="eventDate">23</div>
                </div>
            </Col>
            <Col xs={10} className="colEventDetails">
                <div className="eventTitle">Santa Meetup</div>
                <div className="eventDateAndTime">Mon 23 Jun  - 9:00PM, Santa</div>
                <div>Images</div>
            </Col>
          </Row>
          <Row className="rowContainerZeroMargin eventRowContainer">
            <Col xs={12}>
                <ButtonToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup className="mr-2" aria-label="First group">
                        <Button className="eventbutton" outline color="secondary">
                            <FontAwesomeIcon className="eventBtnIcon" icon="check" />
                            <span className="buttonText">Going</span>
                        </Button>
                        <Button className="eventbutton" outline color="secondary">
                            <FontAwesomeIcon className="eventBtnIcon" icon="question" />
                            <span className="buttonText">Maybe</span>
                        </Button>
                        <Button className="eventbutton" outline color="secondary">
                            <FontAwesomeIcon className="eventBtnIcon"icon="times" />
                            <span className="buttonText">Can't Go</span>
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup className="mr-2" aria-label="Second group">
                        <Button className="eventbutton" outline color="secondary">
                            <span className="shareButton">Share</span>
                            <FontAwesomeIcon className="eventBtnIcon" icon="ellipsis-v" />
                        </Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </Col>
          </Row>
        </Container>
      );
    }
}
  
export default UpcomingEvent;