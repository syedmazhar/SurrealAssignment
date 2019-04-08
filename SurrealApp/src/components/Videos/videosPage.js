import React from 'react';
import ReactDOM from "react-dom";
import { Container, Row, Col } from 'reactstrap';

class VideosPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items:[] };
    }
    render() {
      return (
        <Container className="mainContainer">
          <Row>
            <Col xs={12}>
                Videos Page
            </Col>
          </Row>
        </Container>
      );
    }
}
  
export default VideosPage;