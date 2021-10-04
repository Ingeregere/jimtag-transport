import React, {useEffect, useState} from 'react';
import {Alert, Container, Form} from 'react-bootstrap';
import AllServices from "./Service";
import './style.css'
import PaysService from "../vehicules/pays/PaysService";
import RoleServices from "../Role/RoleServices";
import { useHistory, useParams} from "react-router-dom";



const Index= () => {

    const [address, setAddress] = useState('')
    const [birthday, setBirthday] = useState('')
    const [country, setCountry] = useState()
    const [countries, setCountries] = useState([])
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const [roles, setRoles] = useState([])
    const [sex, setSex] = useState('')
    const [username, setUsername] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState('')
    const history = useHistory()
    const {id} = useParams()

    useEffect(()=>{
        getAllCountry()
        getAllRoles()

    },[])
    const getAllCountry = () =>{
        PaysService.getAllCountry().then((response) =>{
            setCountries(response.data)
        })
    }
    const getAllRoles = () =>{
        RoleServices.getAllRoles().then((response) =>{
            setRoles(response.data)
        })
    }

    const saveUserProfile = (event) =>{
        event.preventDefault();
        const data = {
            address,
            birthday,
            country,
            firstName,
            lastName,
            mobile,
            password,
            role,
            sex,
            username,
            id
        }
        if(id){
            AllServices.UpdateUserProfile(data)
                .then(response=>{
                    console.log('New annonce is added', response.data)
                    setSuccess(response.data.message)
                    setError('')
                    setAddress('')
                    setBirthday('')
                    setCountry('')
                    setMobile('')
                    setFirstName('')
                    setLastName('')
                    setPassword('')
                    setSex('')
                    setUsername('')


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
        history.push('/user-pages/utilisateur')
    }
    const showSuccess = () => (

        <Alert className={"alert-success"} style={{ display: success ? '' : 'none' }}>
            <strong> <center>{success} {' '}
                <span className={'text-center btnX'} onClick={SuccessClose}>X</span></center> </strong>
        </Alert>
    )
    const getUserProfileById = () =>{
        if(id){
            AllServices.getUserProfileById(id)
                .then(currentuser =>{
                    setAddress(currentuser.data.address)
                    setBirthday(currentuser.data.birthday)
                    setCountry(currentuser.data.country)
                    setMobile(currentuser.data.mobile)
                    setFirstName(currentuser.data.firstName)
                    setLastName(currentuser.data.lastName)
                    setPassword(currentuser.data.password)
                    setSex(currentuser.data.sex)
                    setUsername(currentuser.data.username)
                })
                .catch(error =>{
                    console.log('something went wrong', error)
                })
        }
    }
    // const getUserProfileById = () =>{
    //     AllServices.getUserProfileById(id)
    //         .then( brand=>{
    //             setCurrentBrand(brand.data)
    //         })
    //         .catch(error =>{
    //             console.log('something went wrong', error)
    //         })
    // }

    useEffect(() =>{
        getUserProfileById()
        getUserProfileById()
    },[])
    return (
        <Container>
            <span>{showError()}</span>
            <span>{showSuccess()}</span>

            <div className="row maintable">

                <div className="col-lg-6 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <form className="forms-sample">
                                <Form.Group>
                                    <label className={'text-dark text-capitalize'} htmlFor="numberTransport">Nom</label>
                                    <Form.Control
                                        type="text"
                                        className="form-control"
                                        id="exampleInputEmail3"
                                        placeholder="Nom"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <label className={'text-dark text-capitalize'} htmlFor="tonnage">Prénom</label>
                                    <Form.Control
                                        type="text"
                                        className="form-control"
                                        id="exampleInputPassword4"
                                        placeholder="Prénom"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <label className={'text-dark text-capitalize'} htmlFor="brand" >Pays</label>
                                    <select
                                        className="form-control"
                                        id="exampleSelectGender"
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                    >
                                        <option defaultValue={'Selectionner la marque'}>Selectionner pays</option>
                                        {countries && countries.map((b, index) => (
                                            <option key={b.id} value={b.id} >{b.country}</option>
                                        ))}

                                    </select>
                                </Form.Group>
                                <Form.Group>
                                    <label className={'text-dark text-capitalize'} htmlFor="kindProduct">Adresse</label>
                                    <Form.Control
                                        type="text"
                                        className="form-control "
                                        id="exampleInputName1"
                                        placeholder="Adresse"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </Form.Group>



                                <Form.Group>
                                    <label className={'text-dark text-capitalize'} htmlFor="countryLoading" >Role</label>
                                    <select
                                        className="form-control"
                                        id="exampleSelectGender"
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                    >
                                        {roles && roles.map((r, index) => (
                                            <option key={r.id} value={r.id}>{r.role}</option>
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
                                    <label className={'text-dark text-capitalize'} htmlFor="brand" >sexe</label>
                                    <select
                                        className="form-control"
                                        id="exampleSelectGender"
                                        value={sex}
                                        onChange={(e) => setSex(e.target.value)}
                                    >
                                        <option value={'male'}>Masculin</option>
                                        <option value={'female'}>Féminin </option>
                                    </select>
                                </Form.Group>

                                <Form.Group>
                                    <label className={'text-dark text-capitalize'} htmlFor="placeLoading">Télephone</label>
                                    <Form.Control
                                        type="tel"
                                        className="form-control"
                                        id="exampleInputPassword4"
                                        placeholder="+257 888 888"
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <label className={'text-dark text-capitalize'} htmlFor="placeDelivery">Password</label>
                                    <Form.Control
                                        type="text"
                                        className="form-control"
                                        id="exampleInputPassword4"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <label className={'text-dark text-capitalize'} htmlFor="dateDelivery">Date de naissance</label>
                                    <Form.Control
                                        type="date"
                                        className="form-control"
                                        id="exampleInputCity1"
                                        placeholder="date de naissance"
                                        value={birthday}
                                        onChange={(e) => setBirthday(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <label className={'text-dark text-capitalize'} htmlFor="dateDelivery">Nom d'utilisateur</label>
                                    <Form.Control
                                        type="text"
                                        className="form-control"
                                        id="exampleInputCity1"
                                        placeholder="nom d'utilisateur"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </Form.Group>



                                <button
                                    type="submit"
                                    className="btn btn-primary mr-2 btn-fw"
                                    onClick={(event) => saveUserProfile(event)}
                                >
                                    Envoyer
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    );
}

export default Index