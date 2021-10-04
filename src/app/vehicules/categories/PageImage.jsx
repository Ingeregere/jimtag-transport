import React from 'react';
import {Card} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import './style.css'
const API = "http://e-commerce-transport-backend.herokuapp.com:80/api/category/item/viewImageCategoryItemById/"

const ShowImage = () => {
    const {id} = useParams()
    return (
        <>
            <div className="page-header mainheader">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Link to={'/vehicules/categories'}>
                            <button type="button" className="btn btn-primary btn-fw">
                                <span className="icon-bg "><i className="mdi mdi-arrow-left-bold-circle-outline "></i>Retour</span>
                            </button>
                        </Link>
                    </ol>
                </nav>
            </div>
            <center>
                <Card style={
                    { width: '18rem' }
                }>
                    <Card.Img variant="top" src={`${API}${id}`} />
                </Card>
            </center>
        </>
    );

};

export default ShowImage;