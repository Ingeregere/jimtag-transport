import React, {useEffect, useState} from 'react';
import {Alert, Badge, Button, Form} from 'react-bootstrap';
import AllServices from "./ModèleService";
import './style.css'
import {Link, useHistory, useParams} from "react-router-dom";


const Country= () => {
    const [models, setModels] = useState([])
    const [model, setModel] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState('')
    const {id} = useParams()
    const history = useHistory()

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

    useEffect(()=>{
        getAllModel()
        UpdateModelById()

    },[])

    const getAllModel = () =>{
        AllServices.getAllModel().then((response) =>{
            setModels(response.data)
        })
    }

    const saveModel = (event) =>{
        event.preventDefault();
        const newModel = { model }
        const newModelUpdate = { model,id }
        if(id){
            AllServices.updateModel(newModelUpdate, id)
                .then(response=>{
                    console.log('New country is updated', response.data)
                    setSuccess(response.data.message)
                    setError('')
                    setModel('')
                    history.push('/vehicules/modèles')
                })
                .catch(error =>{
                    console.log('something went wrong', error)
                    setError(error)
                    setSuccess('')
                })

        }else{
            AllServices.postModels(newModel)
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
    const showError = () => (

        <Alert className={"alert-danger"} style={{ display: error ? '' : 'none' }}>
            <strong><center>{error}</center></strong>
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
                <h3 className="page-title"> Voir tous les  modèles </h3>
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
                <div className="col-lg-12 grid-margin stretch-card ">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Tous les modèles</h4>

                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                    <tr className={'text-center'}>
                                        <th >index</th>
                                        <th >Name</th>
                                        <th >Modifier</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        models.map((model,index) =>(
                                            <tr key={model.id} className={'text-center'}>
                                                <td >{index+1}</td>
                                                <td>{model.model}</td>
                                                <td>
                                                        <Link to={`/vehicules/model/${model.id}`} className={'text-decoration-none'}>
                                                            <span className="icon-bg "><i className="mdi mdi-pen "></i>Editer</span>
                                                        </Link>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Country
