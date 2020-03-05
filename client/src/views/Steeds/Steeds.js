import React from 'react';
import { MDBDataTable } from 'mdbreact';
import SteedsData from './SteedsData';
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap';
  
class Steeds extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={6}>
            <Card>
              <CardHeader>
                Coursiers enregistrés
              </CardHeader>
              <CardBody>
                  <MDBDataTable
                    striped
                    bordered
                    hover
                    data={SteedsData}
                  />
                </CardBody>
            </Card>
          </Col>          
        </Row>      
      </div>
    );      
  }
}  


export default Steeds;