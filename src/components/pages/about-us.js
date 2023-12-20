// AboutUs.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './about-us.css';
import WeatherApiService from "../../services/weather-api-service"; // Import external CSS file

const AboutUs = () => {
    const apiService = new WeatherApiService();
    console.log(apiService.searchCities("Almaty",1));
    return (
        <div className="about-us-container">
            <Container className="my-5">
                <Row>
                    <Col>
                        <h2 className="text-center mb-4">About Us</h2>
                        <p>
                            Welcome to WeatherHub, where we bring you the latest and most accurate weather information from every corner of the globe.
                            Our mission is to provide a seamless and user-friendly experience, empowering you with the knowledge to plan your day confidently.
                        </p>
                        <p>
                            At WeatherHub, we understand the importance of reliable weather data in making informed decisions. Whether you're planning outdoor activities, travel, or simply staying informed, we've got you covered.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <h3 className="mb-3">How We Work</h3>
                        <p>
                            Our commitment to accuracy and reliability drives us to leverage cutting-edge technologies in collecting and analyzing weather data.
                            We continuously invest in research and development to enhance our capabilities, ensuring that you receive the most up-to-date and precise weather information.
                        </p>
                        <p>
                            Our development team, led by experts like John Doe, is dedicated to creating a seamless and intuitive user interface. We believe in making weather information accessible to everyone, regardless of their technical expertise.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <h3 className="mb-3">About Us Information</h3>
                        <table className="table">
                            <tbody>
                            <tr>
                                <td colSpan="2">Established</td>
                                <td>WeatherHub was founded in 2020 with a passion for delivering accurate and reliable weather information to users worldwide.</td>
                            </tr>
                            <tr>
                                <td rowSpan="2">Team</td>
                                <td>Development</td>
                                <td>Meet John Doe, our lead developer, who brings years of experience and expertise to ensure the technical excellence of WeatherHub.</td>
                            </tr>
                            <tr>
                                <td>Design</td>
                                <td>Jane Smith leads our design team, creating an aesthetically pleasing and user-friendly interface for an enhanced weather experience.</td>
                            </tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutUs;
