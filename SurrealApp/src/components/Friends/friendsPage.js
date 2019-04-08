import React from 'react';
import ReactDOM from "react-dom";
import { Container, Row, Col } from 'reactstrap';
import  { FirebaseContext } from '../Firebase';

class FriendsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items:[] };
    }
    render() {
      return (
        <Container className="mainContainer">
          <Row>
            <Col xs={12}>
                Friends Page
                <FirebaseContext.Consumer>
                  {firebase => {
                    return <div>I've access to Firebase and render something.</div>;
                  }}
                </FirebaseContext.Consumer>
            </Col>
          </Row>
        </Container>
      );
    }
}
  
export default FriendsPage;