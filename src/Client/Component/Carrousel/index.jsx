import React, {useEffect, useState} from 'react';
import './style.css'
import {Card, Carousel, Col, Container, Row} from "react-bootstrap";
import {dataArticle, dataCarrousel} from "./data";
import {useParams} from "react-router-dom";
import AllServices from "../../../app/image-slide/Service";
import ShowImage from "../../../app/vehicules/categories/showImage";
import ShowCarousel from "./ShowCarousel";

const CarrouselAds = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const [carousels, setCarousels] = useState([])

    const {id} = useParams()

    useEffect(()=>{
        getAllCarousel()

    },[])

    const getAllCarousel = () =>{
        AllServices.getAllCarousel().then((response) =>{
            setCarousels(response.data)
        })
    }

    return (
        <Container>
            <h3 className={'text-dark'}>Nos publicités</h3>
            <Card className={'mb-4'}>
                <Row>
                    <Col xs={12} md={6} sm={12}>
                        <Carousel activeIndex={index} onSelect={handleSelect} className={'imagecarrousel'} >

                            {
                                carousels.map((carrousel,index) => (
                                    <Carousel.Item key={index}>
                                        <ShowCarousel
                                            getId={carrousel}
                                            item={'carousel'}
                                            method={'viewImageCarouselById'}
                                            className="d-block w-100 imagecarrousel"
                                        />
                                    </Carousel.Item>
                                ))
                            }
                        </Carousel>
                    </Col>

                            <Col xs={12} md={6} sm={12} >
                                {
                                    dataArticle.map((article,index) =>(
                                <Card className="bg-dark text-white" key={index}>
                                    <Card.Img src={article.image} alt="Card image imagecarrousel" />
                                    <Card.ImgOverlay>
                                        <Card.Title className={'title'} color={'primary'} variant={'container'}>
                                            {/*{article.title}*/}
                                        </Card.Title>
                                        <Card.Title className={'subtitle'} color={'primary'} variant={'container'}>
                                            {/*{article.subTitle}*/}
                                        </Card.Title>
                                        <h6 className={'descriptionH6 text-white'} >
                                            {/*{article.description}*/}
                                        </h6>
                                    </Card.ImgOverlay>
                                </Card>
                                    ))
                                }
                            </Col>


                </Row>
            </Card>
        </Container>
    );
}
export default CarrouselAds;