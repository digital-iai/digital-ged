import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col, Card, CardBody, CardHeader, Form, FormGroup, Label, Input} from 'reactstrap';

class ProfileForm extends React.Component {    
    render() {
        return (
            <Container>
                <Row>
                    <Col xl={12}>
                        <Row>
                            <Col xs={4}>
                                <h2>Profil</h2>
                            </Col>
                            <Col xs={{ size: 4, offset: 4 }}>                            
                                <Link className="btn btn-info text-white float-right" size="sm" to="/parametres/profil">
                                    <i className="fa fa-list fa-sm"></i> Voir liste
                                </Link>                            
                            </Col>
                        </Row>            
                    </Col>
                    <Col xl={12}>
                        <Card>
                            <CardHeader>
                                Enregistrement d'un profil
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <p className="text-muted">
                                        Nb: Le champs qui possèdent * est obligatoire
                                    </p>
                                    <FormGroup row>
                                        <Label for="nom_profil" sm={2}>Nom du profil*</Label>
                                        <Col sm={10}>
                                            <Input type="text" name="nom_profil" id="nom_profil" placeholder="Nom du profil" />
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

export default ProfileForm;