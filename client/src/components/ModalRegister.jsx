import React from 'react';
import { useState } from 'react';
import {Form, Button, Modal} from 'react-bootstrap';
import './Modal.css'

function ModalRegister(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    const [message, setMessage] = useState('');

    return (
        <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <>
                    <h1 className="text-center">
                        Welcome back
                    </h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="input" placeholder="username" onChange={e => setUsername(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="input" placeholder="email" onChange={e => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Parola</Form.Label>
                            <Form.Control type="password" placeholder="parola" onChange={e => setPassword(e.target.value)} />
                        </Form.Group>



                        <Button 
                            onClick={async () => {

                                await fetch('http://localhost:5000/api/users/register', {
                                    headers: {
                                        'Content-Type': 'application/json',
                                        'Accept': 'application/json'
                                    },
                                    method: "POST",
                                    body: JSON.stringify({username: username, password: password, email:email})
                                }
                                ).then(async res => {
                                    if(res.status === 200)
                                        return res.json();
                                    else {
                                        const data = await res.json();
                                        setMessage(data.message);
                                        handleShow();                                        
                                    }
                                })
                                .then((data) => {
                                    if(data !== undefined){
                                        props.success();
                                    }
                                });
                            }}>
                            Creare Cont
                        </Button>
                        <Modal show={showModal} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>Error</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>{message}</Modal.Body>
                        </Modal>
                    </Form>
                </>
            </Modal.Body>
        </Modal>
  );
}

export default ModalRegister;