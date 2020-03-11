import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col, Card, CardBody, CardHeader, Form, FormGroup, Label, Input} from 'reactstrap';

class MailsForm extends React.Component {    
    render() {
        return (
            <Container>
                <Row>
                    <Col xl={12}>
                        <Row>
                            <Col xs={4}>
                                <h2>Courrier</h2>
                            </Col>
                            <Col xs={{ size: 4, offset: 4 }}>                            
                                <Link className="btn btn-info text-white float-right" size="sm" to="/courriers">
                                    <i className="fa fa-list fa-sm"></i> Voir liste
                                </Link>                            
                            </Col>
                        </Row>            
                    </Col>
                    <Col xl={12}>
                        <Card>
                            <CardHeader>
                                Enregistrement d'un courrier
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <p className="text-muted">
                                        Nb: Le champs qui possèdent * est obligatoire
                                    </p>
                                    <FormGroup row>
                                        <Label for="sexe" sm={2}>Expediteur*</Label>
                                        <Col sm={10}>
                                            <Input type="select" name="expediteur" id="expediteur">
                                                <option value="f">test</option>                                                
                                            </Input>
                                        </Col>
                                    </FormGroup>   
                                    <FormGroup row>
                                        <Label for="destinateur" sm={2}>Destinateur*</Label>
                                        <Col sm={10}>
                                            <Input type="text" name="destinateur" id="pseudo" placeholder="Destinateur" />
                                        </Col>                                    
                                    </FormGroup>  
                                    <FormGroup row>
                                        <Label for="objet" sm={2}>Objet</Label>
                                        <Col sm={10}>
                                            <Input type="text" name="nom" id="objet" placeholder="Objet" />
                                        </Col>
                                    </FormGroup>                                      
                                    <FormGroup row>
                                        <Label for="file" sm={2}>Fichier physique</Label>
                                        <Col sm={10}>
                                            <Input type="file" name="file" id="file" />                                        
                                        </Col>
                                    </FormGroup>   
                                    <FormGroup row>
                                        <Label for="observation" sm={2}>Observation</Label>
                                        <Col sm={10}>
                                            <Input type="textarea" name="observation" id="observation" />
                                        </Col>
                                    </FormGroup>  
                                    <FormGroup row>
                                        <Col xs={{size: 2, offset: 8}}>
                                            <Input className="btn btn-secondary" size="sm" type="reset" value="Annuler"/>
                                        </Col>
                                        <Col xs={2}>
                                        <Input className="btn btn-info text-white" size="sm" type="submit" value="Enregistrer"/>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default MailsForm;