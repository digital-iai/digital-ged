import React from 'react';
import { MDBDataTable } from 'mdbreact';
import MailsTrackerData from './MailsTrackerData';
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap';
  
class MailsTracker extends React.Component {
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
                    data={MailsTrackerData}
                  />
                </CardBody>
            </Card>
          </Col>          
        </Row>      
      </div>
    );      
  }
}  


export default MailsTracker;