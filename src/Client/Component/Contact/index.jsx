import React, {useState} from 'react';
import './style.css'
import AllServices from './Services'
import bg from '../../../assets/images/category/scania2.jpg'
import CreateAnnonce from "../../../app/annonce/CreateAnnonce";
import {Alert, Container, Form} from "react-bootstrap";

const Contact = () => {
    const [firstName, setName] = useState('')
    const [lastName, setLastname] = useState('')
    const [mobile, setTelephone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const saveContact = (event) =>{
        event.preventDefault();
        const data = {
            firstName,
            lastName,
            mobile,
            email,
            message
        }
        AllServices.postContact(data)
            .then(response=>{
                console.log('New country is added', response.data)
                setSuccess(response.data.message)
                setError('')
                setName('')
                setLastname('')
                setEmail('')
                setTelephone('')
                setMessage('')
            })
            .catch(error =>{
                console.log('something went wrong', error)
                setError('true')
                setSuccess('')
            })
    }
    const showError = () => (

        <Alert className={"alert-danger"} style={{ display: error ? '' : 'none' }}>
            <strong><center>Une erreur est survenue!</center></strong>
        </Alert>
    )
    const SuccessClose = () =>{
        setSuccess('')
    }
    const showSuccess = () => (

        <Alert className={"alert-success"} style={{ display: success ? '' : 'none' }}>
            <strong> <center>{success} {' '}
                <span className={'text-center btnX'} onClick={SuccessClose}>X</span></center> </strong>
        </Alert>
    )
    return (
        <Container>

            <div className="row mainformanonce maincontact">

                <div className="col-lg-6 grid-margin stretch-card">
                    <div className="card mt-3">

                        <div className="card-body cardbodymain">
                            {showSuccess()}
                            {showError()}

                            <form className="forms-sample">

                                <Form.Group>
                                    <label className={'text-dark text-capitalize'} htmlFor="placeLoading">Nom</label>
                                    <Form.Control
                                        type="text"
                                        className="form-control"
                                        id="exampleInputPassword4"
                                        placeholder="Entrer votre nom"
                                        value={firstName}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <label className={'text-dark text-capitalize'} htmlFor="placeLoading">Prénom</label>
                                    <Form.Control
                                        type="text"
                                        className="form-control"
                                        id="exampleInputPassword4"
                                        placeholder="Entrer votre Prénom"
                                        value={lastName}
                                        onChange={(e) => setLastname(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <label className={'text-dark text-capitalize'} htmlFor="placeDelivery">Email</label>
                                    <Form.Control
                                        type="email"
                                        className="form-control"
                                        id="exampleInputPassword4"
                                        placeholder="Entrer votre Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <label className={'text-dark text-capitalize'} htmlFor="dateDelivery">Mobile</label>
                                    <Form.Control
                                        type="tel"
                                        className="form-control"
                                        id="exampleInputCity1"
                                        placeholder="+257 888 888"
                                        value={mobile}
                                        onChange={(e) => setTelephone(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <label className={'text-dark text-capitalize '} htmlFor="message">Message</label>
                                    <textarea
                                        className="form-control"
                                        id="exampleTextarea1"
                                        rows="4"
                                        value={message}
                                        placeholder={'Entrez votre message'}
                                        onChange={(e) => setMessage(e.target.value)}
                                    ></textarea>
                                </Form.Group>

                                <button
                                    type="submit"
                                    className="btn btn-primary mr-2 btn-fw"
                                    onClick={(event) => saveContact(event)}
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
};

export default Contact;