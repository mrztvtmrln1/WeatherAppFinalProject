// Login.js

import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import './login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: null,
        };
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value, error: null });
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await this.validateLogin();
            console.log('Login submitted:', this.state);

            // Обновляем родительский компонент после успешного входа
            this.props.onLogin();
        } catch (error) {
            console.error('Login failed:', error);
            this.setState({ error: 'Login failed. Please check your credentials.' });
        }
    };

    validateLogin = () => {
        // Hardcoded email and password for simplicity
        const { email, password } = this.state;
        const hardcodedEmail = 'admin@power.com';
        const hardcodedPassword = '12345678';

        // Check if the entered email and password match the hardcoded values
        const isValidLogin = email === hardcodedEmail && password === hardcodedPassword;

        if (isValidLogin) {
            // Redirect to '/' after successful login
            this.props.history.push('/');
        }

        return isValidLogin;
    };

    isFormValid = () => {
        return this.state.email !== '' && this.state.password !== '';
    };

    render() {

        return (
            <Container className="my-5 login-container">
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <h2 className="text-center mb-4">Login to WEATHER(GET)</h2>
                        {this.state.error && <p className="text-danger">{this.state.error}</p>}
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter your password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" disabled={!this.isFormValid()}>
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default withRouter(Login);
