import React, {useEffect, useState} from 'react';
import {Alert, Form} from 'react-bootstrap';
import AllServices from "./Services";
import { useParams} from "react-router-dom";
import ModèleService from "../modèles/ModèleService";
import PaysService from "../pays/PaysService";
import CarrosseriesService from "../carrosseries/CarrosseriesService";
import CategorieServices from "../categories/CategorieServices";
import ServiceMarque from "../marques/ServiceMarque";


const Marque= () => {

    const [values,setValues] = useState({
        bodyworks: [],
        models: [],
        categories: [],
        countries: [],
        brands: [],
        bodywork: '',
        box: '',
        brand: '',
        category: '',
        country: '',
        dateRegistration: '',
        imageTransport : '',
        kilometer: '',
        model: '',
        pav: '',
        power: '',
        ptc: '',
        ptr: '',
        suspension: '',
        formData: '',
        error: false,
        success: false
    })
    const {
        bodyworks,
        models,
        categories,
        countries,
        brands,
        bodywork,
        box,
        brand,
        category,
        country,
        dateRegistration,
        kilometer,
        model,
        pav,
        power,
        ptc,
        ptr,
        suspension,
        formData,
        error,
        success
    } = values
    const getAllBrands = () =>{
        ServiceMarque.getAllBrand().then((data) =>{
            if(data.error){
                setValues({...values})
            }
            else {
                setValues({
                    ...values,
                    brands: data,
                    formData: new FormData()
                })
            }
            // console.log(response.data)
        })
    }

    const getAllModel = () =>{
        ModèleService.getAllModel().then((data) =>{
           if(data.error){
               setValues({...values})
           }
           else {
               setValues({
                   ...values,
                   models: data,
                   formData: new FormData()
               })
           }
            // console.log(response.data)
        })
    }
    const getAllCountries = () =>{
        PaysService.getAllCountry().then((data) =>{
            if(data.error){
                setValues({...values})
            }
            else {
                setValues({
                    ...values,
                    countries: data,
                    formData: new FormData()
                })
            }
        })
    }
    const getAllBodyWork = () =>{
        CarrosseriesService.getAllBodywork().then((data) =>{
            if(data.error){
                setValues({...values})
            }
            else {
                setValues({
                    ...values,
                    bodyworks: data,
                    formData: new FormData()
                })
            }
        })
    }
    const getAllCategory = () =>{
        CategorieServices.getAllCategory().then((data) =>{
            if(error){
                setValues({...values})
            }
            else {
                setValues({
                    ...values,
                    categories: data,
                    formData: new FormData()
                })
            }
        })
    }
    useEffect(()=>{
        getAllBrands()
        getAllCountries()
        getAllBodyWork()
        getAllCategory()
        getAllModel()
    }, [])


    const handleChange = name => event =>{
        const value = name === 'imageTransport' ? event.target.files[0]: event.target.value
        formData.set(name, value)
        setValues({...values, [name]: value})

    }

    const clickSubmit = event =>{
        event.preventDefault();
        setValues({...values, error: ''})
        AllServices.postTransport(formData)
            .then(data =>{
                if(data.error){
                    setValues({...values,error: false})
                }
                else{
                    setValues({
                        ...values,
                        bodywork: '',
                        box: '',
                        brand: '',
                        category: '',
                        country: '',
                        dateRegistration: '',
                        imageTransport : '',
                        kilometer: '',
                        model: '',
                        pav: '',
                        power: '',
                        ptc: '',
                        ptr: '',
                        suspension: '',
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
            <span>{showError()}</span>
            <span>{showSuccess()}</span>

            <div className="page-header">
                <h3 className="page-title"> Créer une nouvelle attribution </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Forms</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Attribuer</li>
                    </ol>
                </nav>
            </div>
            <div className="row">

                <div className="col-lg-6 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <form className="forms-sample">
                                <Form.Group>
                                    <label className={'text-dark'} htmlFor="brand" >Marque</label>
                                    <select
                                        className="form-control"
                                        id="exampleSelectGender"

                                        value={brand}
                                        onChange={handleChange('brand')}
                                    >
                                        <option placeholder={'Selectionner la marque ...'} />
                                        {brands && brands.map((brand, index) => (
                                            <option key={brand.id} value={brand.id}>{brand.brand}</option>
                                        ))}

                                    </select>
                                </Form.Group>
                                <Form.Group>
                                    <label className={'text-dark'} htmlFor="brand" >Carrosserie</label>
                                    <select
                                        className="form-control"
                                        id="exampleSelectGender"
                                        value={bodywork}
                                        onChange={handleChange('bodywork')}
                                    >
                                        <option defaultValue={'Selectionner la marque'}>Selectionner carrosserie</option>
                                        {bodyworks && bodyworks.map((bodywork, index) => (
                                            <option key={bodywork.id} value={bodywork.id} >{bodywork.bodywork}</option>
                                        ))}

                                    </select>
                                </Form.Group>
                                <Form.Group>
                                    <label className={'text-dark'} htmlFor="brand" >Boite de vitesse</label>
                                    <select
                                        className="form-control"
                                        id="exampleSelectGender"
                                        value={box}
                                        onChange={handleChange('box')}
                                    >
                                        <option defaultValue={'Selectionner la marque'}>Selectionner boite de vitesse</option>
                                        <option value={'automatic'}>Automatique</option>
                                        <option value={'manual'}>Manuel</option>
                                        <option value={'sequential'}>Sequentiel</option>

                                    </select>
                                </Form.Group>
                                <Form.Group>
                                    <label className={'text-dark'} htmlFor="numberTransport">Nombre de Kilomètres</label>
                                    <Form.Control
                                        type="number"
                                        className="form-control"
                                        id="exampleInputEmail3"
                                        placeholder="Nombre de kilomètre"
                                        value={kilometer}
                                        onChange={handleChange('kilometer')}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <label className={'text-dark'} htmlFor="tonnage">Puissance</label>
                                    <Form.Control
                                        type="text"
                                        className="form-control"
                                        id="exampleInputPassword4"
                                        placeholder="Puissance"
                                        value={power}
                                        onChange={handleChange('power')}
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <label className={'text-dark'} htmlFor="countryLoading" >Pays </label>
                                    <select
                                        className="form-control"
                                        id="exampleSelectGender"
                                        value={country}
                                        onChange={handleChange('country')}
                                    >
                                        {countries && countries.map((country, index) => (
                                            <option key={country.id} value={country.id}>{country.country}</option>
                                        ))}
                                    </select>
                                </Form.Group>
                                <Form.Group>
                                    <label className={'text-dark'} htmlFor="countryLoading" >Model </label>
                                    <select
                                        className="form-control"
                                        id="exampleSelectGender"
                                        value={model}
                                        onChange={handleChange('model')}
                                    >
                                        {models && models.map((model, index) => (
                                            <option key={model.id} value={model.id}>{model.model}</option>
                                        ))}
                                    </select>
                                </Form.Group>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">

                            <form className="forms-sample">

                                <Form.Group>
                                    <label className={'text-dark'} htmlFor="countryDelivery" >Category</label>
                                    <select
                                        className="form-control"
                                        id="exampleSelectGender"
                                        value={category}
                                        onChange={handleChange('category')}
                                    >
                                        {categories && categories.map((categorie, index) => (
                                            <option key={categorie.id} value={categorie.id}>{categorie.category}</option>
                                        ))}
                                    </select>
                                </Form.Group>
                                <Form.Group>
                                    <label className={'text-dark'} htmlFor="placeLoading">Pav</label>
                                    <Form.Control
                                        type="text"
                                        className="form-control"
                                        id="exampleInputPassword4"
                                        placeholder="Pav"
                                        value={pav}
                                        onChange={handleChange('pav')}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <label className={'text-dark'} htmlFor="placeDelivery">Ptc</label>
                                    <Form.Control
                                        type="text"
                                        className="form-control"
                                        id="exampleInputPassword4"
                                        placeholder="Ptc"
                                        value={ptc}
                                        onChange={handleChange('ptc')}
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <label className={'text-dark'} htmlFor="placeDelivery">Ptr</label>
                                    <Form.Control
                                        type="text"
                                        className="form-control"
                                        id="exampleInputPassword4"
                                        placeholder="Ptr"
                                        value={ptr}
                                        onChange={handleChange('ptr')}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <label className={'text-dark'} htmlFor="placeDelivery">Suspension</label>
                                    <Form.Control
                                        type="text"
                                        className="form-control"
                                        id="exampleInputPassword4"
                                        placeholder="Suspension"
                                        value={suspension}
                                        onChange={handleChange('suspension')}
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <label className={'text-dark'} htmlFor="dateDelivery">Date de Registration</label>
                                    <Form.Control
                                        type="date"
                                        className="form-control"
                                        id="exampleInputCity1"
                                        placeholder="date de livraison"
                                        value={dateRegistration}
                                        onChange={handleChange('dateRegistration')}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <label className={'text-dark'} htmlFor="tonnage">Image</label>
                                    <Form.Control
                                        type="text"
                                        className="form-control"
                                        id="exampleInputPassword4"
                                        placeholder="image"
                                        accept={'image/*'}
                                        name={'imageTransport'}
                                        onChange={handleChange('imageTransport')}
                                    />
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
