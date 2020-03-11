import React from 'react';
import { MDBDataTable } from 'mdbreact';
import DepartmentData from './DepartmentData';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap';
  
class Department extends React.Component {
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
                <h2>Departement</h2>
              </Col>
              <Col xs={{ size: 4, offset: 4 }}>                
                <Link className="btn btn-info text-white float-right" size="sm" to="/enregistrerDepartement">
                  <i className="fa fa-plus fa-sm"></i> Enregistrer
                </Link>                
              </Col>
            </Row>            
          </Col>
          <Col xl={12}>
            <Card>
              <CardHeader>
                Utilisateurs enregistrés
              </CardHeader>
              <CardBody>
                  <MDBDataTable                    
                    striped
                    bordered
                    hover
                    data={DepartmentData}
                  />
                </CardBody>
            </Card>
          </Col>          
        </Row>      
      </div>
    );      
  }
}  


export default Department;