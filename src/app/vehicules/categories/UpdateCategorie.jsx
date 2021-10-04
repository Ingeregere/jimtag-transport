import React, {useEffect, useState} from 'react';
import {Alert, Form} from 'react-bootstrap';
import AllServices from "./CategorieServices";
import {Link, useParams} from "react-router-dom";
import './style.css'


const Marque= () => {

    const {id} = useParams()
    const [currentBrand,setCurrentBrand] = useState('')
    const [values,setValues] = useState({
        imageCategory: '',
        category: '',
        error: '',
        success: '',
        formData: ''
    })
    const {
        category,
        formData,
        error,
        success
    } = values
    useEffect(()=>{
        getCategoryById()
    },[])

    const getCategoryById = () =>{
        AllServices.getCategoryById(id)
            .then( brand=>{
                setCurrentBrand(brand.data)
            })
            .catch(error =>{
                console.log('something went wrong', error)
            })
    }
    const UpdateBrandById = () =>{
        if(id){
            AllServices.getBrandById(id)
                .then(currentBrand =>{
                    setValues({...values})
                })
                .catch(error =>{
                    console.log('something went wrong', error)
                })
        }
    }
    useEffect(()=>{
        setValues({...values, formData: new FormData()})
    }, [])


    const handleChange = name => event =>{
        const value = name === 'imageCategory' ? event.target.files[0]: event.target.value
        formData.set(name, value)
        setValues({...values, [name]: value})

    }

    const clickSubmit = event =>{
        event.preventDefault();
        setValues({...values, error: ''})
        AllServices.postCategory(formData)
            .then(data =>{
                if(data.error){
                    setValues({...values,error: false})
                }
                else{
                    setValues({
                        ...values,
                        imageCategory: '',
                        category: '',
                        success: true
                    })
                }
            })


    }
    const showError = () => (

        <Alert className={"alert-danger"} style={{ display: error ? '' : 'none' }}>
            <strong><center>Veiller complète tous les champs</center></strong>
        </Alert>
    )
    const showSuccess = () => (

        <Alert className={"alert-success"} style={{ display: success ? '' : 'none' }}>
            <strong> <center>Une nouvelle categorie  bien ajouté </center> </strong>
        </Alert>
    )
    return (
        <div>
            <div className="page-header mainheader">
                <h3 className="page-title">{id? "Editer" : "Ajouter"} une cataagorie </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Link to={'/vehicules/categories'}>
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
            <div className="row mainheader">
                <div className="col-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <form className="form-inline">
                                <h4 className="card-title px-2">Categorie</h4>
                                <label className="sr-only" htmlFor="inlineFormInputName2">Image</label>
                                <Form.Control
                                    type="file"
                                    className="form-control mb-2 mr-sm-2"
                                    id="inlineFormInputName2"

                                    accept={'image/*'}
                                    name={'imageCategory'}
                                    onChange={handleChange('imageCategory')}
                                />
                                <label className="sr-only" htmlFor="inlineFormInputName2">Name</label>
                                <Form.Control
                                    type="text"
                                    className="form-control mb-2 mr-sm-2"
                                    id="inlineFormInputName2"
                                    placeholder="Ajouter une nouvelle categorie"
                                    value={category}
                                    name={'category'}
                                    onChange={handleChange('category')}
                                />

                                <button
                                    type="submit"
                                    className="btn btn-primary mr-2 btn-rounded btn-fw"
                                    onClick={(event) => clickSubmit(event)}

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

export default Marque
