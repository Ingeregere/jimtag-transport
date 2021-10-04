import React, {useEffect, useState} from 'react';
import {Alert, Form} from 'react-bootstrap';
import AllServices from "./Service";
import {Link, useParams, useHistory} from "react-router-dom";

const Marque= () => {

    const {id} = useParams()
    const history = useHistory()

    const [values,setValues] = useState({
        image: '',
        error: '',
        success: '',
        formData: ''
    })
    const {
        formData,
        error,
        success
    } = values

    useEffect(()=>{
        setValues({...values, formData: new FormData()})
    }, [])


    const handleChange = name => event =>{
        const value = name === 'image' ? event.target.files[0]: event.target.value
        formData.set(name, value)
        setValues({...values, [name]: value})

    }

    const clickSubmit = event =>{
        event.preventDefault();
        setValues({...values, error: ''})
        AllServices.postCarousel(formData)
            .then(response =>{
                if(response.error){
                    setValues({...values,error: true})
                }
                else{
                    setValues({
                        ...values,
                        image: '',
                        success: response.data.message,
                        error: false,
                    })
                    history.push('/image-slide/image-slide')
                }
            })


    }
    const showError = () => (

        <Alert className={"alert-danger"} style={{ display: error ? '' : 'none' }}>
            <strong><center>Erreur</center></strong>
        </Alert>
    )
    const showSuccess = () => (

        <Alert className={"alert-success"} style={{ display: success ? '' : 'none' }}>
            <strong> <center> {success} </center> </strong>
        </Alert>
    )
    return (

            <div>
                <div className="page-header mainheader">
                    <h3 className="page-title">{id? "Editer" : "Ajouter"} une slide </h3>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <Link to={'/image-slide/image-slide'}>
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
                    <div className="col-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <form className="form-inline">
                                    <h4 className="card-title px-2">Slide</h4>
                                    <label className="sr-only" htmlFor="inlineFormInputName2">Image</label>
                                    <Form.Control
                                        type="file"
                                        className="form-control mb-2 mr-sm-2"
                                        id="inlineFormInputName2"

                                        accept={'image/*'}
                                        name={'image'}
                                        onChange={handleChange('image')}
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
