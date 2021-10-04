import React , {useState} from "react";
import './style.css'
import {Button, Col, Form, Modal, Row} from "react-bootstrap";

function ModalContact() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} >
                Nous Contacter pour ce vehicule
            </Button>

            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton className={'modalMainHeader'}>
                    <Modal.Title className={'text-white'}>Nous Contacter pour ce vehicule</Modal.Title>
                </Modal.Header>
                <Modal.Body className={'modalMain'}>
                    <Form>
                        <Row>
                            <Col md={6} sm={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className={'text-dark'} >Nom</Form.Label>
                                    <Form.Control type="text" placeholder="Nom" />
                                </Form.Group>
                            </Col>
                            <Col md={6} sm={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className={'text-dark'}>Prenom</Form.Label>
                                    <Form.Control type="text" placeholder="Prénom" />
                                </Form.Group>
                            </Col>
                            <Col  md={6} sm={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className={'text-dark'}>Email </Form.Label>
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>
                            </Col>
                            <Col  md={6} sm={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className={'text-dark'}>Téléphone</Form.Label>
                                    <Form.Control type="tel" placeholder="Téléphone" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <label htmlFor="exampleTextarea1" className={'text-dark'}>Message</label>
                                    <textarea className="form-control" id="exampleTextarea1" rows="4" placeholder={'Envoyer du message ...'}></textarea>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button variant="primary" type="submit">
                            Envoyer
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Fermer
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalContact