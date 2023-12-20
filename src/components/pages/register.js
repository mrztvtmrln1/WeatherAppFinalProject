// Register.js

import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import './register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        agreeTerms: false,
    });

    // Ref for uncontrolled input
    const uncontrolledInputRef = useRef(null);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Access uncontrolled input value using ref
        console.log('Uncontrolled Input Value:', uncontrolledInputRef.current.value);
        // Add logic to handle form submission
        console.log('Form submitted:', formData);
    };

    const isFormValid =
        formData.firstName !== '' &&
        formData.lastName !== '' &&
        formData.email !== '' &&
        formData.password !== '' &&
        formData.agreeTerms;

    return (
        <Container className="my-5">
            <Row>
                <Col>
                    <h2 className="text-center mb-4">Register for WEATHER(GET)</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your first name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        {/* Add uncontrolled input */}
                        <Form.Group className="mb-3" controlId="formUncontrolledInput">
                            <Form.Label>Uncontrolled Input</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter uncontrolled input"
                                ref={uncontrolledInputRef}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your last name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter your password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formCheckbox">
                            <Form.Check
                                type="checkbox"
                                label="I agree to the terms and conditions"
                                name="agreeTerms"
                                checked={formData.agreeTerms}
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" disabled={!isFormValid}>
                            Register
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;
