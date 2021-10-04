import React, {useState} from 'react';
import './style.css'
import iveco1 from '../../../assets/images/category/iveco1.jpg'
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {currentproduct} from './data'
import ModalContact from '../Modal'

const Detail = () => {

    return (
        <>
            <Container>
                <h2 className={'text-dark'}>Voici la détail complet du vehicule</h2>
                <Card className={'cardMain'}>
                    <Row>

                            <Col lg={6} md={6} sm={6} xs={12} >
                                <Card className={'mb-2 mt-2 ml-2 cardProduct'}>
                                            <Card.Img variant="top" src= {iveco1} className={'imageProduct img-fluid'}  />
                                </Card>
                            </Col>
                        <Col lg={6} md={6} sm={6} xs={12} >
                            <Card className={'mb-2 mt-2 ml-2 mr-2 cardProduct'}>

                                        <Card.Body>
                                            <Card.Title>Détail complet</Card.Title>
                                            <h6>Marque : {currentproduct.marque} </h6>
                                            <h6>Model : {currentproduct.model}</h6>
                                            <h6>Fonction: {currentproduct.fonction}</h6>
                                            <h6>Année : {currentproduct.année}</h6>
                                            <h6>Km: {currentproduct.km}</h6>
                                            <ModalContact />

                                        </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Card>





            </Container>


        </>
    );
};

export default Detail;