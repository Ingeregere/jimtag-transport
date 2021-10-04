import React, {useEffect, useState} from "react"
import AllServices from './CarrosseriesService'
import './style.css'
import {Alert,  Form} from "react-bootstrap";
import {Link, useHistory, useParams} from "react-router-dom";

function ModalContact() {
    const {id} = useParams()
    const [bodywork, setBodywork] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState('')
    const [currentBrand,setCurrentBrand] = useState('')
    const history = useHistory()

    const getBodyworkById = () =>{
        AllServices.getAllBodyworkById(id)
            .then( bodywork=>{
                setCurrentBrand(bodywork.data)
            })
            .catch(error =>{
                console.log('something went wrong', error)
            })
    }


    const saveBodywork = (event) =>{
        event.preventDefault();
        const newBodywork = { bodywork, id}
        if(id){
            AllServices.updateBodywork(newBodywork)
                .then(response=>{
                    console.log('Updated annonce is added', response.data)
                    setSuccess(response.data.message)
                    setError('')
                    setBodywork('')

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
        history.push('/vehicules/carrosseries')
    }
    const showSuccess = () => (

        <Alert className={"alert-success"} style={{ display: success ? '' : 'none' }}>
            <strong> <center>{success} {' '}
                <span className={'text-center btnX'} onClick={SuccessClose}>X</span></center> </strong>
        </Alert>
    )
    const UpdateBodyworkById = () =>{
        if(id){
            AllServices.getAllBodyworkById(id)
                .then(currentBrand =>{
                    setBodywork(currentBrand.data.bodywork)
                })
                .catch(error =>{
                    console.log('something went wrong', error)
                })
        }
    }

    useEffect(() =>{
        UpdateBodyworkById()
        getBodyworkById()
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
                                    value={ bodywork }
                                    onChange={(e) => setBodywork(e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="btn btn-primary mr-2 btn-fw"
                                    onClick={(event) => saveBodywork(event)}
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