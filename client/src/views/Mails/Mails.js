import React from 'react';
import { MDBDataTable } from 'mdbreact';
import MailsData from './MailsData';
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap';
  
class Mails extends React.Component {
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
                    data={MailsData}
                  />
                </CardBody>
            </Card>
          </Col>          
        </Row>      
      </div>
    );      
  }
}  


export default Mails;