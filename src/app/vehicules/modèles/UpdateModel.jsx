import React, {useEffect, useState} from "react"
import AllServices from './ModèleService'
import '../marques/style.css'
import {Alert, Badge, Button, Col, Form, Modal, Row} from "react-bootstrap";
import {Link, useHistory, useParams} from "react-router-dom";

function ModalContact() {
    const {id} = useParams()
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState('')
    const [models, setModels] = useState([])
    const [model, setModel] = useState('')
    const [show, setShow] = useState(false);
    const [current,setCurrent] = useState('')
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const history = useHistory()

    const getModelById = () =>{
        AllServices.getModelById(id)
            .then(model=>{
                setCurrent(model.data)
            })
            .catch(error =>{
                console.log('something went wrong', error)
            })
    }


    const UpdateModelById = () =>{
        if(id){
            AllServices.getModelById(id)
                .then(currentModel =>{
                    setModel(currentModel.data.model)
                })
                .catch(error =>{
                    console.log('something went wrong', error)
                })
        }
    }

    const saveModel = (event) =>{
        event.preventDefault();
        const newModel = { model,id }
        if(id){
            AllServices.updateModel(newModel)
                .then(response=>{
                    console.log('New country is added', response.data)
                    setSuccess(response.data.message)
                    setError('')
                    setModel('')
                })
                .catch(error =>{
                    console.log('something went wrong', error)
                    setError('true')
                    setSuccess('')
                })
        }
    }
    useEffect(() =>{
        getModelById()
        UpdateModelById()
    },[])
    const showError = () => (

        <Alert className={"alert-danger"} style={{ display: error ? '' : 'none' }}>
            <strong><center>Veiller complète tous les champs</center></strong>
        </Alert>
    )
    const SuccessClose = () =>{
        setSuccess('')
        history.push('/vehicules/modèles')
    }
    const showSuccess = () => (

        <Alert className={"alert-success"} style={{ display: success ? '' : 'none' }}>
            <strong> <center>{success} {' '}
                <span className={'text-center btnX'} onClick={SuccessClose}>X</span></center> </strong>
        </Alert>
    )
    return (
        <div>
            <div className="page-header mainheader">
                <h3 className="page-title">Voulez-vous Editer  <span className={'titleEdite'}>{current.model}</span>?</h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Link to={'/vehicules/ajouter_models'}>
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
                                <h4 className="card-title px-2">Model</h4>
                                <label className="sr-only" htmlFor="inlineFormInputName2">Name</label>
                                <Form.Control
                                    type="text"
                                    className="form-control mb-2 mr-sm-2"
                                    id="inlineFormInputName2"
                                    placeholder="Ajouter une nouvelle categorie"
                                    value={model}
                                    onChange={(e) => setModel(e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="btn btn-primary mr-2 btn-fw"
                                    onClick={(event) => saveModel(event)}
                                >
                                    Editer
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