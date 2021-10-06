import React, {useEffect, useState} from 'react';
import {Alert, Form} from 'react-bootstrap';
import './style.css'
import AllServices from "./CategorieServices";
import {Link, useParams} from "react-router-dom";


const Marque= () => {
    const {id} = useParams()
    const [values,setValues] = useState({
        imageCategoryItem: '',
        categoryItem: '',
        error: '',
        success: '',
        formData: ''
    })
    const {
        categoryItem,
        formData,
        error,
        success
    } = values

    const init=()=>{
        AllServices.getCategoryById(id).then(data=>{
            if(data.error){
                setValues({...values,error:data.error})
            }
            else{
                //populate the state
                //load categories
                setValues({
                    ...values,
                    categoryItem: data.data.categoryItem,
                    formData: new FormData()

                })
            }

        })

    }


    useEffect(()=>{
        init()
    }, [])


    const handleChange = name => event =>{
        const value = name === 'imageCategoryItem' ? event.target.files[0]: event.target.value
        formData.set(name, value)
        setValues({...values, [name]: value})

    }

    const clickSubmit = event =>{
        event.preventDefault();
        setValues({...values, error: ''})
        AllServices.updateCategory(formData, id)
            .then(data =>{
                if(data.error){
                    setValues({...values,error: false})
                }
                else{
                    setValues({
                        ...values,
                        imageCategoryItem: '',
                        success: data.data.message,
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
            <strong> <center>{success} </center> </strong>
        </Alert>
    )
    return (
        <div>
            <div className="page-header mainheader">
                <h3 className="page-title">Voulez-vous Editer  <span className={'titleEdite'}>{categoryItem}</span>?</h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Link to={'/vehicules/categories'}>
                            <button type="button" className="btn btn-primary btn-fw">
                                <span className="icon-bg ">
                                    <i className="mdi mdi-arrow-left-bold-circle-outline "></i>
                                    Retour
                                </span>
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
                                <h4 className="card-title px-2">Categorie</h4>
                                <label className="sr-only" htmlFor="inlineFormInputName2">Image</label>
                                <Form.Control
                                    type="file"
                                    className="form-control mb-2 mr-sm-2"
                                    id="inlineFormInputName2"
                                    accept={'image/*'}
                                    name={'imageCategoryItem'}
                                    onChange={handleChange('imageCategoryItem')}
                                />
                                <button
                                    type="submit"
                                    className="btn btn-primary mr-2  btn-fw"
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
