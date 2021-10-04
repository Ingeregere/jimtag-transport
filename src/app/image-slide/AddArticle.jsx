import React, {useEffect, useState} from 'react';
import {Alert, Form} from 'react-bootstrap';
import AllServices from "./Service";
import {Link, useParams} from "react-router-dom";


const Marque= () => {

    const {id} = useParams()
    const [values,setValues] = useState({
        articleImage : '',
        description : '',
        subTitle : '',
        title  : '',
        error: '',
        success: '',
        formData: ''
    })
    const {
        description,
        subTitle,
        title,
        formData,
        error,
        success
    } = values

    useEffect(()=>{
        setValues({...values, formData: new FormData()})
    }, [])


    const handleChange = name => event =>{
        const value = name === 'articleImage' ? event.target.files[0]: event.target.value
        formData.set(name, value)
        setValues({...values, [name]: value})

    }

    const clickSubmit = event =>{
        event.preventDefault();
        setValues({...values, error: ''})
        AllServices.postArticle(formData)
            .then(data =>{
                if(data.error){
                    setValues({...values,error: false})
                }
                else{
                    setValues({
                        ...values,
                        articleImage: '',
                        description: '',
                        subTitle: '',
                        title: '',
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
                <h3 className="page-title">{id? "Editer" : "Ajouter"} un article </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Link to={'/image-slide/image-publicite'}>
                            <button type="button" className="btn btn-primary btn-fw">
                                <span>  <i className="mdi mdi-arrow-left-bold-circle-outline "></i>Retour</span>
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
                <div className={'col-lg-3'}></div>

                <div className="col-lg-6 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <form className="forms-sample">
                                <Form.Group>
                                    <label className={'text-dark text-capitalize '} htmlFor="message">Image</label>
                                    <Form.Control
                                        type="file"
                                        className="form-control mb-2 mr-sm-2"
                                        id="inlineFormInputName2"
                                        accept={'image/*'}
                                        name={'art'}
                                        onChange={handleChange('articleImage')}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <label className={'text-dark text-capitalize '} htmlFor="message">Titre</label>
                                    <Form.Control
                                        type="text"
                                        className="form-control mb-2 mr-sm-2"
                                        id="inlineFormInputName2"
                                        placeholder="title"
                                        value={title}
                                        name={'title'}
                                        onChange={handleChange('title')}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <label className={'text-dark text-capitalize '} htmlFor="message">Sous titre</label>
                                    <Form.Control
                                        type="text"
                                        className="form-control mb-2 mr-sm-2"
                                        id="inlineFormInputName2"
                                        placeholder="sous titre"
                                        value={subTitle}
                                        name={'subTitle'}
                                        onChange={handleChange('subTitle')}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <label className={'text-dark text-capitalize '} htmlFor="message">Description</label>
                                    <textarea
                                        className="form-control"
                                        id="exampleTextarea1"
                                        rows="4"
                                        value={description}
                                        placeholder={'Entrez votre description'}
                                        onChange={handleChange('description')}
                                    ></textarea>

                                </Form.Group>
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
