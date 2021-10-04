import React from 'react';
import {Card} from "react-bootstrap";
const API = "http://e-commerce-transport-backend.herokuapp.com:80/api/"

const ShowImage = ({item, getId, method}) => {
    return (
        <Card.Img variant="top" src={`${API}${item}/${method}/${getId.id}`} className={'imagecarrousel'} />
    );
};
export default ShowImage;