import React, {useEffect, useState} from 'react';
import './style.css'
import {Col, Container, Form, Row} from "react-bootstrap";
import ServiceMarque from "../../../app/vehicules/marques/ServiceMarque";
import PaysService from "../../../app/vehicules/pays/PaysService";
import CarrosseriesService from "../../../app/vehicules/carrosseries/CarrosseriesService";

const SearchFilter = () => {
    const [brands, setBrands] = useState([])

    const [countries, setCountries] = useState([])
    const [categories, setCategories] = useState([])
    const [bodyworks, setBodyWorks] = useState([])


    useEffect(()=>{
        getAllBrands()
        getAllCountries()
        getAllBodyWork()

    },[])
    const getAllBrands = () =>{
        ServiceMarque.getAllBrand().then((response) =>{
            setBrands(response.data)
            // console.log(response.data)
        })
    }

    const getAllCountries = () =>{
        PaysService.getAllCountry().then((response) =>{
            setCountries(response.data)
        })
    }
    const getAllBodyWork = () =>{
        CarrosseriesService.getAllBodywork().then((response) =>{
            setBodyWorks(response.data)
        })
    }

    return (
        <>
            <Container >

                <Form className={'mt-3 mainForm'}>
                    <Row >

                        <Col md={2} lg={2} sm={6} xs={6} className={'btnSubmitView'}>
                            <p className={'mb-4'}></p>
                            <button type="button" className="btn btn-primary btn-fw btnView ">Sélectionner</button>
                        </Col>

                        <Col md={2} lg={2} sm={6} xs={6}>
                            <Form.Group >
                                <label htmlFor="exampleSelectGender" className={'Namelabel'}>Marque</label>
                                <select className="form-control" id="exampleSelectGender">
                                    <option defaultValue={'Selectionner la marque'}>marque</option>
                                    {brands && brands.map((brand, index) => (
                                        <option key={brand.id} value={brand.id} >{brand.brand}</option>
                                    ))}
                                </select>
                            </Form.Group>
                        </Col>
                        <Col md={2} lg={2} sm={6} xs={6}>
                            <Form.Group >
                                <label htmlFor="exampleSelectGender" className={'Namelabel'}>Carrosserie</label>
                                <select className="form-control" id="exampleSelectGender">
                                    <option defaultValue={'Selectionner la marque'}>carrosserie</option>
                                    {bodyworks && bodyworks.map((bodywork, index) => (
                                        <option key={bodywork.id} value={bodywork.id} >{bodywork.bodywork}</option>
                                    ))}
                                </select>
                            </Form.Group>
                        </Col>
                        <Col md={2} lg={2} sm={6} xs={6}>
                            <Form.Group >
                                <label htmlFor="exampleSelectGender" className={'Namelabel'}>Boite de vitesse</label>
                                <select className="form-control" id="exampleSelectGender">
                                    <option defaultValue={'Boite de vitesse'}>Boite de vitesse</option>
                                    <option value={'automatic'}>Automatique</option>
                                    <option value={'manual'}>Manuel</option>
                                    <option value={'sequential'}>Sequentiel</option>
                                </select>
                            </Form.Group>
                        </Col>
                        <Col md={2} lg={2} sm={6} xs={6}>
                            <Form.Group >
                                <label htmlFor="exampleSelectGender" className={'Namelabel'}>Pays</label>
                                <select className="form-control" id="exampleSelectGender">
                                    <option defaultValue={'Selectionner le pays'}> pays</option>
                                    {countries && countries.map((country, index) => (
                                        <option key={country.id} value={country.id}>{country.country}</option>
                                    ))}
                                </select>
                            </Form.Group>
                        </Col>
                        <Col md={2} lg={2} sm={6} xs={6} className={'btnSubmit'}>
                            <p className={'mb-4'}></p>
                            <button type="button" className="btn btn-primary btn-fw btnSub">Envoyer votre recherche</button>
                        </Col>

                    </Row>

                </Form>

            </Container>


        </>
    );
};

export default SearchFilter;