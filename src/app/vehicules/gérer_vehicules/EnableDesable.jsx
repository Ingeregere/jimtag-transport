import React, {useEffect, useState} from 'react';
import './style.css'
import {Alert, Badge, Form} from 'react-bootstrap';
import AllServices from "./GererVehiculeServices";
import {Link, useHistory, useParams} from "react-router-dom";



const Index= () => {

    const [brands, setBrands] = useState([])
    const [status, setStatus] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState('')
    const history = useHistory()
    const {id} = useParams()


    const saveBodywork = (event) =>{
        event.preventDefault();
        const newStatus = { status , id}
        AllServices.enableDisableStatusTransport(newStatus)
            .then(response=>{
                setSuccess(response.data.message)
                setError('')
                setStatus('')

            })
            .catch(error =>{
                console.log('something went wrong', error)
                setError('true')
                setSuccess('')
            })
    }
    const showError = () => (

        <Alert className={"alert-danger"} style={{ display: error ? '' : 'none' }}>
            <strong><center>Veiller complète tous les champs</center></strong>
        </Alert>
    )
    const SuccessClose = () =>{
        setSuccess('')
        history.push('/vehicules/gérer_vehicules')
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
                <h3 className="page-title"> {id? "Editer": "Ajouter"} changer l'état du vehicule </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Link to={'/vehicules/gérer_vehicules'}>
                            <button type="button" className="btn btn-primary btn-fw">
                                <span className="icon-bg "><i className="mdi mdi-arrow-left-bold-circle-outline "></i>Retour</span>
                            </button>
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
                                <h4 className="card-title px-2 ml-4">Vehicule</h4>
                                <Form.Group>
                                    <select
                                        className="form-control"
                                        id="exampleSelectGender"
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                    >
                                       <option>selectionner...</option>
                                       <option value={'true'}>Activé</option>
                                       <option value={'false'}>desactivé</option>
                                    </select>
                                </Form.Group>
                                <button
                                    type="submit"
                                    className="btn btn-primary mr-2 btn-fw ml-4"
                                    onClick={(event) => saveBodywork(event)}
                                >
                                    Envoyer
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Index
