import React, {useEffect, useState} from "react"
import AllServices from './PaysService'
import './style.css'
import {Alert, Badge, Button, Col, Form, Modal, Row} from "react-bootstrap";
import {Link, useHistory, useParams} from "react-router-dom";

function ModalContact() {
    const {id} = useParams()
    const [brands, setBrands] = useState([])
    const [country, setCountry] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState('')
    const [show, setShow] = useState(false);
    const [currentBrand,setCurrentBrand] = useState('')
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const history = useHistory()

    const getCountryById = () =>{
        AllServices.getCountryById(id)
            .then( country=>{
                setCurrentBrand(country.data)
            })
            .catch(error =>{
                console.log('something went wrong', error)
            })
    }


    const saveBrand = (event) =>{
        event.preventDefault();
        const newBrande = { country, id}
        if(id){
            AllServices.UpdateCountry(newBrande)
                .then(response=>{
                    console.log('Updated annonce is added', response.data)
                    setSuccess(response.data.message)
                    setError('')
                    setCountry('')

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
        history.push('/vehicules/pays')
    }
    const showSuccess = () => (

        <Alert className={"alert-success"} style={{ display: success ? '' : 'none' }}>
            <strong> <center>{success} {' '}
                <span className={'text-center btnX'} onClick={SuccessClose}>X</span></center> </strong>
        </Alert>
    )
    const UpdateCountryById = () =>{
        if(id){
            AllServices.getCountryById(id)
                .then(currentBrand =>{
                    setCountry(currentBrand.data.country)
                })
                .catch(error =>{
                    console.log('something went wrong', error)
                })
        }
    }

    useEffect(() =>{
        UpdateCountryById()
        getCountryById()
    },[])
    return (
        <div>
            <div className="page-header mainheader">
                <h3 className="page-title">Voulez-vous Editer  <span className={'titleEdite'}>{currentBrand.country}</span>?</h3>
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
                                    value={ country }
                                    onChange={(e) => setCountry(e.target.value)}
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