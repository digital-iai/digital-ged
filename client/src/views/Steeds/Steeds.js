import React from 'react';
import { MDBDataTable } from 'mdbreact';
import SteedsData from './SteedsData';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap';
  
class Steeds extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Row>
              <Col xs={4}>
                <h2>Coursiers</h2>
              </Col>
              <Col xs={{ size: 4, offset: 4 }}>                
                <Link className="btn btn-info text-white float-right" size="sm" to="/enregistrerCoursier">
                  <i className="fa fa-plus fa-sm"></i> Enregistrer
                </Link>                
              </Col>
            </Row>            
          </Col>
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