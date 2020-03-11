import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col, Card, CardBody, CardHeader, Form, FormGroup, Label, Input} from 'reactstrap';

class UserForm extends React.Component {    
    render() {
        return (
            <Container>
                <Row>
                    <Col xl={12}>
                        <Row>
                            <Col xs={4}>
                                <h2>Utilisateurs</h2>
                            </Col>
                            <Col xs={{ size: 4, offset: 4 }}>                            
                                <Link className="btn btn-info text-white float-right" size="sm" to="/utilisateurs">
                                    <i className="fa fa-list fa-sm"></i> Voir liste
                                </Link>                            
                            </Col>
                        </Row>            
                    </Col>
                    <Col xl={12}>
                        <Card>
                            <CardHeader>
                                Enregistrement d'un utilisateur
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <p className="text-muted">
                                        Nb: Le champs qui possèdent * est obligatoire
                                    </p>
                                    <FormGroup row>
                                        <Label for="pseudo" sm={2}>Pseudo*</Label>
                                        <Col sm={10}>
                                            <Input type="text" name="pseudo" id="pseudo" placeholder="Pseudo" />
                                        </Col>                                    
                                    </FormGroup>  
                                    <FormGroup row>
                                        <Label for="nom" sm={2}>Nom*</Label>
                                        <Col sm={10}>
                                            <Input type="text" name="nom" id="nom" placeholder="Nom" />
                                        </Col>
                                    </FormGroup>  
                                    <FormGroup row>
                                        <Label for="prenom" sm={2}>Prenom*</Label>
                                        <Col sm={2}>
                                            <Input type="text" name="prenom" id="nom" placeholder="Prenom" />
                                        </Col>
                                    </FormGroup>  
                                    <FormGroup row>
                                        <Label for="sexe" sm={2}>Sexe*</Label>
                                        <Col sm={10}>
                                            <Input type="select" name="sexe" id="sexe">
                                                <option value="f">F</option>
                                                <option value="m">M</option>          
                                            </Input>
                                        </Col>
                                    </FormGroup>      
                                    <FormGroup row>
                                        <Label for="email" sm={2}>Email</Label>
                                        <Col sm={10}>
                                            <Input type="email" name="email" id="email" placeholder="Email" />
                                        </Col>
                                    </FormGroup>                 
                                    <FormGroup row>
                                        <Label for="departement" sm={2}>Departement*</Label>
                                        <Col sm={10}>
                                            <Input type="select" name="departement" id="departement">
                                                <option>test</option>          
                                            </Input>
                                        </Col>
                                    </FormGroup>      
                                    <FormGroup row>
                                        <Label for="profil" sm={2}>Profil*</Label>
                                        <Col sm={10}>
                                            <Input type="select" name="profil" id="profil">
                                                <option>test</option>          
                                            </Input>
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

export default UserForm;