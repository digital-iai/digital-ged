import React from 'react';
import { Row, Col } from 'reactstrap';
import Widget02 from './Widget02';
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
          <Col xs="12" sm="6" lg="3">
            <Widget02 header="80" mainText="Utilisateurs" icon="fa fa-users" color="primary" />
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Widget02 header="80" mainText="Courriers" icon="fa fa-envelope" color="info" />
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Widget02 header="80" mainText="Coursiers" icon="fa fa-user" color="warning" />
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Widget02 header="80" mainText="Départements" icon="fa fa-building" color="danger" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;