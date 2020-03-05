import React from 'react';
import { MDBDataTable } from 'mdbreact';
import ArchivesData from './ArchivesData';
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap';
  
class Archives extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
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
                    data={ArchivesData}
                  />
                </CardBody>
            </Card>
          </Col>          
        </Row>      
      </div>
    );      
  }
}  


export default Archives;