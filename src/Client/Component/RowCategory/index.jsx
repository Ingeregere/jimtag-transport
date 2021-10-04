import React, {useEffect, useState} from 'react';
import './style.css'
import {Col, Container, Row, Card} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import NavLink from "react-bootstrap/NavLink";
import ShowImage from "../../../app/vehicules/categories/showImage";
import AllServices from "../../../app/vehicules/categories/CategorieServices";

const RowCategory = () => {
    const [Allccategories, setCategories] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        getAllCategory()
    },[])

    const getAllCategory = () =>{
        AllServices.getAllCategory().then((response) =>{
            setCategories(response.data)
        })
    }
    return (
        <Container>
            <Row className={'mainRowCategory'}>

                {
                    Allccategories.map((category) =>(
                        <Col className={'RowCard'} key={category.id} >
                            <NavLink as={Link} to={`/${category.categoryItem.toLowerCase()}`} >
                                <Card className="bg-dark text-white border-white shadow ">
                                    <ShowImage item={'item'} sort={'category'} method={'viewImageCategoryItemById'} getId={category} />
                                    <Card.Footer className=" footerCard " >
                                        <p className={'NameCategorie'}>{category.categoryItem}</p>
                                    </Card.Footer>
                                </Card>
                            </NavLink>
                        </Col>
                    ))
                }


            </Row>
        </Container>
    );
};

export default RowCategory;