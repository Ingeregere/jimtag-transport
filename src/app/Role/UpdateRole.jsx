import React, {useEffect, useState} from "react"
import AllServices from './RoleServices'
import './style.css'
import {Alert, Form} from "react-bootstrap";
import {Link, useHistory, useParams} from "react-router-dom";

function ModalContact() {
    const {id} = useParams()
    const [role, setRole] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState('')
    const [currentBrand,setCurrentBrand] = useState('')
    const history = useHistory()

    const getRoleById = () =>{
        AllServices.getRoleById(id)
            .then( brand=>{
                setCurrentBrand(brand.data)
            })
            .catch(error =>{
                console.log('something went wrong', error)
            })
    }

    const saveRole = (event) =>{
        event.preventDefault();
        const data = { role, id}
        if(id){
            AllServices.UpdateRole(data)
                .then(response=>{
                    console.log('Updated annonce is added', response.data)
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
    const UpdateRoleById = () =>{
        if(id){
            AllServices.getRoleById(id)
                .then(currentBrand =>{
                    setRole(currentBrand.data.role)
                })
                .catch(error =>{
                    console.log('something went wrong', error)
                })
        }
    }

    useEffect(() =>{
        UpdateRoleById()
        getRoleById()
    },[])
    return (
        <div>
            <div className="page-header mainheader">
                <h3 className="page-title">Voulez-vous Editer  <span className={'titleEdite'}>{currentBrand.role}</span>?</h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Link to={'/user-pages/role'}>
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
                                <h4 className="card-title px-2">Role</h4>
                                <label className="sr-only" htmlFor="inlineFormInputName2">Name</label>
                                <Form.Control
                                    type="text"
                                    className="form-control mb-2 mr-sm-2"
                                    id="inlineFormInputName2"
                                    placeholder="Ajouter une nouvelle categorie"
                                    value={ role }
                                    onChange={(e) => setRole(e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="btn btn-primary mr-2 btn-fw"
                                    onClick={(event) => saveRole(event)}
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