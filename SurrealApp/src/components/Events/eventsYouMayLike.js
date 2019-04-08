import React from 'react';
import ReactDOM from "react-dom";
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
//import HorizontalScroll from 'react-scroll-horizontal'
import SimilarEvent from "./components/similarEvent";

class EventsYouMayLike extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items:[] };
    }
    render() {
      return (
        <Card>
            <CardBody className="cardNoPadding">
                <CardTitle className="cardTitle">Events You May Like</CardTitle>
                <hr className="separtorWithNoMargins"/>
                <div className="similarEventsContainer">
                    {/* <HorizontalScroll> */}
                        <SimilarEvent className="card"/>
                        <SimilarEvent className="card"/>
                    {/* </HorizontalScroll> */}
                </div>
            </CardBody>
        </Card>
      );
    }
}
  
export default EventsYouMayLike;