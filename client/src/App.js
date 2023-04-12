import './App.css';

import 'typeface-merriweather';

import MyNavbar from './components/MyNavbar';
import ModalPosted from './components/ModalPosted';
import Footer from './components/Footer';

import { Row, Col, Button, Card, Form, Container } from 'react-bootstrap';
import { useState, useRef } from 'react'

import Challenge1 from './img/logo.png';
import Challenge2 from './img/logo.png';
import Challenge3 from './img/logo.png';
import Logo from './img/logo.png';

function App() {

    const [showPostedModal, setShowPostedModal] = useState(false);
    const [tokens, setTokens] = useState("");
    const [description, setDescription] = useState("");
    const [code1, setCode1] = useState("");
    const [code2, setCode2] = useState("");
    const [code3, setCode3] = useState("");

    function handleChallengeChange(e) {
        const { name, value } = e.target;

        switch (name) {
            case '_tokens':
                if (value === '' || (Number(value) >= 1 && Number(value) <= 20)) {
                    setTokens(value);
                }
                break;
            case '_description':
                setDescription(value);
                break;
            case '_code1':
                setCode1(value);
                break;
            case '_code2':
                setCode1(value);
                break;
            case '_code3':
                setCode1(value);
                break;
            default:
                break;
        }
    }

    function handleChallengeSubmit(e) {
        e.preventDefault();
        if(description !== '') {
            console.log(`Submitted challenge tokens: ${description}`);
        }
        if(tokens !== '') {
            console.log(`Submitted challenge tokens: ${tokens}`);
        }
        if(code1 !== '') {
            console.log(`Challlenge1 completed with code: ${code1}`);
        }
        if(code2 !== '') {
            console.log(`Challlenge1 completed with code: ${code2}`);
        }
        if(code3 !== '') {
            console.log(`Challlenge1 completed with code: ${code3}`);
        }
        e.target.reset();
    }

    const formChallenge = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth"
        })
    }

    return (
        <>
            <MyNavbar />

            <Container className="d-flex justify-content-center" style={{ padding: "0%" }}>
                <Row md={2} xs={1} className="align-items-center">
                    <Col className="mb-5" md={6}>
                        <h1 className="h1-main mb-3">
                            Recycling has never been easier.
                        </h1>
                        <p className="p-main mb-5">
                            The ideal platform for people who want to recycle, win prizes and more.
                        </p>
                        <Button className="position-relative start-50 translate-middle" onClick={() => scrollToSection(formChallenge)} variant="primary">
                            Start an ECO CHALLENGE
                        </Button>
                    </Col>
                    <Col className="mb-5" md={6}>
                        <img className="img-fluid" src={Logo}></img>
                    </Col>
                </Row>
            </Container>

            <Container ref={formChallenge} className="d-flex justify-content-center mb-5" style={{ background: "#005600", padding: "5%" }} >
                <Row className="align-items-center justify-content-center">
                    <Card style={{ height: "60%", width: "100%" }}>
                        <Card.Body>
                            <Container className="d-flex justify-content-center mb-5">
                                <Row md={2} xs={1} className="align-items-center">
                                    <Col className="text-center">
                                        <h1 className="h1-card">
                                            Do you want to recycle and don't know how?
                                        </h1>
                                        <p className="p-card">
                                            Complete and post new challenges to win.
                                        </p>
                                    </Col>
                                    <Col>
                                        <Form onSubmit={handleChallengeSubmit}>
                                            <Form.Group className="mb-3" controlId="formChallengeDescription">
                                                <Form.Label>Description</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name='_description'
                                                    value={description}
                                                    onChange={handleChallengeChange}
                                                    placeholder="Enter a description for this new challenge"
                                                    maxLength={2500}

                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formChallengeTokens">
                                                <Form.Label>Number of tokens</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    name='_tokens'
                                                    value={tokens}
                                                    onChange={handleChallengeChange}
                                                    placeholder="Enter a number between 1 and 20"
                                                    min="1"
                                                    max="20"
                                                    required
                                                />
                                                <Form.Control.Feedback type='invalid'>
                                                    Please enter a number of tokens between 1 and 20
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Button variant="primary" type="submit">
                                                Submit
                                            </Button>

                                        </Form>
                                    </Col>
                                </Row>
                            </Container>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
            <Container>
                <Row>
                    <h1 className="h1-card mb-5">
                        Top Challenges
                    </h1>
                </Row>

                <Row xs={1} md={3}>
                    <Col className="mb-5">
                        <Card style={{ height: "90%", width: "100%" }}>
                            <Card.Body>
                                <Container className="d-flex justify-content-center mb-5">
                                    <Row md={1} xs={3} className="align-items-center">
                                        <p className="p-card">
                                            Recycle 10 plastic bottles at your nearest recycling center.
                                        </p>

                                        <h1 className="h1-card">
                                            10 tokens
                                        </h1>

                                        <Form onSubmit={handleChallengeSubmit}>
                                            <Form.Group className="mb-3" controlId="formChallengeComplete">
                                                <Form.Label></Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name='_code1'
                                                    value={code1}
                                                    onChange={handleChallengeChange}
                                                    placeholder="Enter recycling center code."
                                                    maxLength={20}

                                                />
                                            </Form.Group>
                                            <Button variant="primary" type="submit">
                                                Complete challenge
                                            </Button>
                                        </Form>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-5">
                        <Card style={{ height: "90%", width: "100%" }}>
                            <Card.Body>
                                <Container className="d-flex justify-content-center mb-5">
                                    <Row md={1} xs={3} className="align-items-center">
                                        <p className="p-card">
                                            Recycle 25 plastic bags at your nearest recycling center.
                                        </p>

                                        <h1 className="h1-card">
                                            15 tokens
                                        </h1>

                                        <Form onSubmit={handleChallengeSubmit}>
                                            <Form.Group className="mb-3" controlId="formChallengeComplete">
                                                <Form.Label></Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name='_code3'
                                                    value={code3}
                                                    onChange={handleChallengeChange}
                                                    placeholder="Enter recycling center code."
                                                    maxLength={20}

                                                />
                                            </Form.Group>
                                            <Button variant="primary" type="submit">
                                                Complete challenge
                                            </Button>
                                        </Form>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-5">
                        <Card style={{ height: "90%", width: "100%" }}>
                            <Card.Body>
                                <Container className="d-flex justify-content-center mb-5">
                                    <Row md={1} xs={3} className="align-items-center">
                                        <p className="p-card">
                                            Recycle 12 plastic bottles caps at your nearest recycling center.
                                        </p>

                                        <h1 className="h1-card">
                                            6 tokens
                                        </h1>

                                        <Form onSubmit={handleChallengeSubmit}>
                                            <Form.Group className="mb-3" controlId="formChallengeComplete">
                                                <Form.Label></Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name='_code2'
                                                    value={code2}
                                                    onChange={handleChallengeChange}
                                                    placeholder="Enter recycling center code."
                                                    maxLength={20}

                                                />
                                            </Form.Group>
                                            <Button variant="primary" type="submit">
                                                Complete challenge
                                            </Button>
                                        </Form>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
            <Footer />
        </>
    );
}

export default App;