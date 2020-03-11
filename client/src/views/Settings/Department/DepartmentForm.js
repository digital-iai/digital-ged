import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col, Card, CardBody, CardHeader, Form, FormGroup, Label, Input} from 'reactstrap';

class DepartmentForm extends React.Component {    
    render() {
        return (
            <Container>
                <Row>
                    <Col xl={12}>
                        <Row>
                            <Col xs={4}>
                                <h2>Departement</h2>
                            </Col>
                            <Col xs={{ size: 4, offset: 4 }}>                            
                                <Link className="btn btn-info text-white float-right" size="sm" to="/parametres/departement">
                                    <i className="fa fa-list fa-sm"></i> Voir liste
                                </Link>                            
                            </Col>
                        </Row>            
                    </Col>
                    <Col xl={12}>
                        <Card>
                            <CardHeader>
                                Enregistrement d'un departement
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <p className="text-muted">
                                        Nb: Le champs qui possèdent * est obligatoire
                                    </p>
                                    <FormGroup row>
                                        <Label for="nom_departement" sm={2}>Nom du département*</Label>
                                        <Col sm={10}>
                                            <Input type="text" name="nom_departement" id="pseudo" placeholder="Nom du departement" />
                                        </Col>                                    
                                    </FormGroup>  
                                    <FormGroup row>
                                        <Label for="description" sm={2}>Description du département</Label>
                                        <Col sm={10}>
                                        <Input type="textarea" name="text" id="description" />
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

export default DepartmentForm;