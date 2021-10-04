import React from 'react';
import './style.css'
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {dataProduct} from "./data";
import {Link} from "react-router-dom";

const Product = () => {
    return (
        <>
           <Container>
                       <Card className={'cardMain'}>
                           <Row>

                               {dataProduct.map((product,index) =>(
                                   <Col lg={6} md={6} sm={6} xs={12} key={index}>


                                       <Card className={'mb-2 mt-2 mr-2 ml-2 cardProduct'}>
                                           <Row>
                                               <Col xs={12} md={6}>
                                                   <Card.Img variant="top" src= {product.src} className={'imageProduct img-fluid'}  />
                                               </Col>
                                               <Col xs={12} md={6} >
                                                   <Card.Body>
                                                       <Card.Title>{product.marque}</Card.Title>
                                                       <h6>Marque : {product.marque} </h6>
                                                       <h6>Model : TRAKKER 450 6X4 EEV</h6>
                                                       <h6>Fonction: {product.fonction}</h6>
                                                       <h6>Année : {product.année}</h6>
                                                       <h6>Km: {product.km}</h6>
                                                       <Link to={`/detail/${index}`}>
                                                           <Button variant="primary" >En savoir plus</Button>
                                                       </Link>
                                                   </Card.Body>
                                               </Col>
                                           </Row>
                                       </Card>


                                   </Col>
                               ))}
                           </Row>
                       </Card>





           </Container>


        </>
    );
};

export default Product;