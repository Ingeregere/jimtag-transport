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
        if(id){
            AllServices.UpdateBrand(newBrande)
                .then(response=>{
                    console.log('Updated annonce is added', response.data)
                    setSuccess(response.data.message)
                    setError('')
                    setBrand('')
                    history.push('/vehicules/marques')
                })
                .catch(error =>{
                    console.log('something went wrong', error)
                    setError('true')
                    setSuccess('')
                })
        }
        else{
            AllServices.postBrand(newBrand)
                .then(response=>{
                    console.log('New annonce is added', response.data)
                    setSuccess(response.data.message)
                    setError('')
                    setBrand('')
                    history.push('/vehicules/marques')
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
    }
    const showSuccess = () => (

        <Alert className={"alert-success"} style={{ display: success ? '' : 'none' }}>
            <strong> <center>{success} {' '} <button
                type="button"
                className="btn btn-primary
                btn-rounded btn-fw"
                onClick={SuccessClose}
            >Fermer</button></center> </strong>
        </Alert>
    )
    return (
        <div>
            <div className="page-header mainheader">
                <h3 className="page-title"> Voir tous les marques </h3>
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

                <div className="col-lg-12 grid-margin stretch-card ">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Tous les marques</h4>

                            <div className="table-responsive ">
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
                                        brands.map((b,index) =>(
                                            <tr key={b.id} className={'text-center'}>
                                                <td >{index+1}</td>
                                                <td>{b.brand}</td>
                                                <td>
                                                    <Link to={`/vehicules/marque/${b.id}`} className={'text-decoration-none'}>
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

export default Index
