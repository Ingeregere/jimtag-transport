import React, { useState } from 'react';
import {Alert, Form} from 'react-bootstrap';
import AllServices from "./RoleServices";
import './style.css'
import {Link, useHistory, useParams} from "react-router-dom";



const Index= () => {

    const [role, setRole] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState('')
    const history = useHistory()
    const {id} = useParams()

    const saveRole = (event) =>{
        event.preventDefault();
        const data = { role}
        AllServices.postRole(data)
            .then(response=>{
                console.log('New annonce is added', response.data)
                setSuccess(response.data.message)
                setError('')
                setRole('')

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
        history.push('/user-pages/role')
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
                <h3 className="page-title"> {id? "Editer": "Ajouter"}  role </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Link to={'/user-pages/role'}>
                            <button type="button" className="btn btn-primary btn-fw">Voir tout</button>
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
                                <h4 className="card-title px-2">Roles</h4>
                                <label className="sr-only" htmlFor="inlineFormInputName2">Name</label>
                                <Form.Control
                                    type="text"
                                    className="form-control mb-2 mr-sm-2"
                                    id="inlineFormInputName2"
                                    placeholder="Ajouter une nouvelle categorie"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="btn btn-primary mr-2 btn-fw"
                                    onClick={(event) => saveRole(event)}
                                >
                                    {id? 'Editer': 'Envoyer'}
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
