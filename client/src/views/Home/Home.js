import React from 'react';
import { Row, Col } from 'reactstrap';
import Widget from '../../utils/Widget';
import Chart from '../../utils/Chart';

class Home extends React.Component {
  constructor(props) {
    super(props);    
  }
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs={3}><Widget header='13' value="25" children='Utilisateurs' /></Col>          
          <Col xs={3}><Widget header='8' value="10" icon="icon-envelope" children='Courriers' /></Col>          
          <Col xs={3}><Widget header='7' value="6" icon="icon-note" children='Courriers signés' /></Col>          
          <Col xs={3}><Widget header='5' value="5" icon="icon-direction" children='Coursiers' /></Col>          
        </Row>
        <Row>
          <Col xs={8}><Chart /></Col>
        </Row>
      </div>
    );
  }
}

export default Home;