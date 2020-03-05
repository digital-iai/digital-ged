import React from 'react';
import { MDBDataTable } from 'mdbreact';
import ProfileData from './ProfileData';
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap';
  
class Profile extends React.Component {
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
                Utilisateurs enregistrés
              </CardHeader>
              <CardBody>
                  <MDBDataTable                    
                    striped
                    bordered
                    hover
                    data={ProfileData}
                  />
                </CardBody>
            </Card>
          </Col>          
        </Row>      
      </div>
    );      
  }
}  


export default Profile;