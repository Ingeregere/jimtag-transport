import React, {useEffect, useState} from "react"
import AllServices from './ServiceMarque'
import './style.css'
import {Alert, Badge, Button, Col, Form, Modal, Row} from "react-bootstrap";
import {Link, useHistory, useParams} from "react-router-dom";

function ModalContact() {
    const {id} = useParams()
    const [brands, setBrands] = useState([])
    const [brand, setBrand] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState('')
    const [show, setShow] = useState(false);
    const [currentBrand,setCurrentBrand] = useState('')
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const history = useHistory()

    const getBrandById = () =>{
        AllServices.getBrandById(id)
            .then( brand=>{
                setCurrentBrand(brand.data)
            })
            .catch(error =>{
                console.log('something went wrong', error)
            })
    }

    const getAllBrands = () =>{
        AllServices.getAllBrand().then((response) =>{
            setBrands(response.data)
        })
    }
    const saveBrand = (event) =>{
        event.preventDefault();
        const newBrande = { brand, id}
        if(id){
            AllServices.UpdateBrand(newBrande)
                .then(response=>{
                    console.log('Updated annonce is added', response.data)
                    setSuccess(response.data.message)
                    setError('')
                    setBrand('')

                })
                .catch(error =>{
                    console.log('something went wrong', error)
                    setError('true')
                    setSuccess('')
                })
        }
    }
    const showError = () => (

        <Alert className={"alert-danger"} style={{ display: error ? '' : 'none' }}>
            <strong><center>Veiller complète tous les champs</center></strong>
        </Alert>
    )
    const SuccessClose = () =>{
        setSuccess('')
        history.push('/vehicules/marques')
    }
    const showSuccess = () => (

        <Alert className={"alert-success"} style={{ display: success ? '' : 'none' }}>
            <strong> <center>{success} {' '}
                <span className={'text-center btnX'} onClick={SuccessClose}>X</span></center> </strong>
        </Alert>
    )
    const UpdateBrandById = () =>{
        if(id){
            AllServices.getBrandById(id)
                .then(currentBrand =>{
                    setBrand(currentBrand.data.brand)
                })
                .catch(error =>{
                    console.log('something went wrong', error)
                })
        }
    }

    useEffect(() =>{
        UpdateBrandById()
        getBrandById()
        getAllBrands()
    },[])
    return (
        <div>
            <div className="page-header mainheader">
                <h3 className="page-title">Voulez-vous Editer  <span className={'titleEdite'}>{currentBrand.brand}</span>?</h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Link to={'/vehicules/ajouter_marques'}>
                            <button type="button" className="btn btn-primary btn-fw">Ajouter</button>
                        </Link>
                    </ol>
                </nav>
            </div>
            {
                showError()
            }
            {
                showSuccess()
            }
            <div className="row maintable">
                <div className="col-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <form className="form-inline">
                                <h4 className="card-title px-2">Marques</h4>
                                <label className="sr-only" htmlFor="inlineFormInputName2">Name</label>
                                <Form.Control
                                    type="text"
                                    className="form-control mb-2 mr-sm-2"
                                    id="inlineFormInputName2"
                                    placeholder="Ajouter une nouvelle categorie"
                                    value={ brand }
                                    onChange={(e) => setBrand(e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="btn btn-primary mr-2 btn-fw"
                                    onClick={(event) => saveBrand(event)}
                                >
                                    Enregistre
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalContact