import {Form, Button, Modal} from 'react-bootstrap'
import { useState } from 'react';
import './Modal.css'

function ModalLogin(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

  return (
    <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
            <>
                <h1 className="text-center" style={{fontFamily: "Merriweather"}}>
                    Welcome back
                </h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="input" placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword" onChange={(e) => setPassword(e.target.value)}>
                        <Form.Label>Parola</Form.Label>
                        <Form.Control type="password" placeholder="parola" />
                    </Form.Group>
                    <Button 
                    onClick={ () => {
                        fetch('http://localhost:5000/api/users/login', {
                            headers: {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json'
                            },
                            method: "POST",
                            body: JSON.stringify({username: username, password: password})
                        }).then(async res => {
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
                                    localStorage.setItem('AccessToken', data.message)
                                    props.success();
                                }
                        });


                    }} bg-color="green">
                        Logare
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

export default ModalLogin;