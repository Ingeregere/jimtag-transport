import React, {useEffect, useState} from 'react';
import './style.css'
import {Alert, Badge, Form} from 'react-bootstrap';
import AllServices from "./ServiceMarque";
import {Link, useHistory, useParams} from "react-router-dom";



const Index= () => {

    const [brands, setBrands] = useState([])
    const [brand, setBrand] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState('')
    const history = useHistory()
    const {id} = useParams()

    useEffect(()=>{
        getAllBrands()
        UpdateBrandById()

    },[])

    const getAllBrands = () =>{
        AllServices.getAllBrand().then((response) =>{
            setBrands(response.data)
        })
    }

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

    const saveBrand = (event) =>{
        event.preventDefault();
        const newBrand = { brand}
        const newBrande = { brand, id}

            AllServices.postBrand(newBrand)
                .then(response=>{
                    console.log('New annonce is added', response.data)
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
    return (
        <div>
            <div className="page-header mainheader">
                <h3 className="page-title"> {id? "Editer": "Ajouter"} une marque </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                            <Link to={'/vehicules/marques'}>
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
                                <h4 className="card-title px-2">Marques</h4>
                                <label className="sr-only" htmlFor="inlineFormInputName2">Name</label>
                                <Form.Control
                                    type="text"
                                    className="form-control mb-2 mr-sm-2"
                                    id="inlineFormInputName2"
                                    placeholder="Ajouter une nouvelle categorie"
                                    value={brand}
                                    onChange={(e) => setBrand(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="btn btn-primary mr-2 btn-fw"
                                    onClick={(event) => saveBrand(event)}
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
