import React, {useEffect, useState} from 'react';
import {Alert, Form} from 'react-bootstrap';
import ServiceMarque from "../marques/ServiceMarque";
import CarrosseriesService from "../carrosseries/CarrosseriesService";
import ModèleService from "../modèles/ModèleService";
import PaysService from "../pays/PaysService";
import TransportServices from "./Services";
import {Link} from "react-router-dom";



const Transport = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [brands, setBrands] = useState([])
    const [countries, setCountries] = useState([])
    const [categories, setCategories] = useState([])
    const [models, setModels] = useState([])
    const [bodyworks, setBodyWorks] = useState([])
    const [bodywork, setBodyWork] = useState('')
    const [box, setBox] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [country, setCountry] = useState('')
    const [dateRegistration, setDateRegistration] = useState('')
    const [kilometer, setKilometer] = useState('')
    const [model, setModel] = useState('')
    const [pav, setPav] = useState('')
    const [power, setPower] = useState('')
    const [ptc, setPtc] = useState('')
    const [ptr, setPtr] = useState('')
    const [suspension, setSuspension] = useState('')

    const showError = () => (

        <Alert className={"alert-danger"} style={{ display: error ? '' : 'none' }}>
            <strong><center>Tous les champs sont recommandés!</center></strong>
        </Alert>
    )
    const showSuccess = () => (

        <Alert className={"alert-success"} style={{ display: success ? '' : 'none' }}>
            <strong> <center>{success}</center> </strong>
        </Alert>
    )


    useEffect(()=>{
        getAllBrands()
        getAllCountries()
        getAllBodyWork()
        getAllCategory()
        getAllModel()

    },[])

    const getAllBrands = () =>{
        ServiceMarque.getAllBrand().then((response) =>{
            setBrands(response.data)
            // console.log(response.data)
        })
    }
    const getAllModel = () =>{
        ModèleService.getAllModel().then((response) =>{
            setModels(response.data)
            // console.log(response.data)
        })
    }
    const getAllCountries = () =>{
        PaysService.getAllCountry().then((response) =>{
            setCountries(response.data)
        })
    }
    const getAllBodyWork = () =>{
        CarrosseriesService.getAllBodywork().then((response) =>{
            setBodyWorks(response.data)
        })
    }
    const getAllCategory = () =>{
        TransportServices.getAllCategoryTransport().then((response) =>{
            setCategories(response.data)
        })
    }

    const saveAttribuer = (event) =>{
        event.preventDefault();
        const newTransport = {
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
            suspension
        }
        TransportServices.postTransport(newTransport)
            .then(response=>{
                console.log('New annonce is added', response.data)
                setBodyWork('')
                setBox('')
                setCategory('')
                setCountry('')
                setDateRegistration('')
                setKilometer('')
                setModel('')
                setPav('')
                setPower('')
                setPtc('')
                setPtr('')
                setSuspension('')
                setSuccess(response.data.message)
                setError('')
            })

            .catch(error =>{
                console.log('something went wrong', error)
                setError('true')
                setSuccess('')
            })

    }

    return (
        <div>
            <span>{showError()}</span>
            <span>{showSuccess()}</span>

            <div className="page-header mainheader">
                <h3 className="page-title"> Une nouvelle attribution </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Link to={'/vehicules/gérer_vehicules'}>
                            <button type="button" className="btn btn-primary btn-fw">Voir tout</button>
                        </Link>
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
                                        onChange={(e) => setBrand(e.target.value)}
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
                                        onChange={(e) => setBodyWork(e.target.value)}
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
                                        onChange={(e) => setBox(e.target.value)}
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
                                        onChange={(e) => setKilometer(e.target.value)}
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
                                        onChange={(e) => setPower(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <label className={'text-dark'} htmlFor="countryLoading" >Pays </label>
                                    <select
                                        className="form-control"
                                        id="exampleSelectGender"
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
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
                                        onChange={(e) => setModel(e.target.value)}
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
                                        onChange={(e) => setCategory(e.target.value)}
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
                                        onChange={(e) => setPav(e.target.value)}
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
                                        onChange={(e) => setPtc(e.target.value)}
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
                                        onChange={(e) => setPtr(e.target.value)}
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
                                        onChange={(e) => setSuspension(e.target.value)}
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
                                        onChange={(e) => setDateRegistration(e.target.value)}
                                    />
                                </Form.Group>

                                <button
                                    type="submit"
                                    className="btn btn-primary mr-2 btn-fw"
                                    onClick={(event) => saveAttribuer(event)}
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

export default Transport
