// FAQ.js
import React from 'react';
import './faq.css'
const FAQ = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Frequently Asked Questions</h2>

            <div className="accordion" id="faqAccordion">
                {/* Question 1 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            Question 1: What is WEATHER(GET)?
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            WEATHER(GET) is a free weather information website where you can find detailed
                            information about the weather conditions in various cities. We provide real-time data
                            sourced from an open API, ensuring accurate and up-to-date weather information.
                        </div>
                    </div>
                </div>

                {/* Question 2 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            Question 2: How does WEATHER(GET) work?
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            WEATHER(GET) retrieves weather data from an open API, processing and displaying it in
                            a user-friendly format. We use CSS properties like Opacity, Position, and Transitions for
                            a visually appealing design. Google Fonts are employed to enhance the overall typography.
                        </div>
                    </div>
                </div>

                {/* Question 3 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            Question 3: Is WEATHER(GET) free to use?
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            Yes, WEATHER(GET) is completely free to use. We believe in providing access to accurate
                            weather information without any cost. Enjoy the benefits of our platform without any
                            subscription fees.
                        </div>
                    </div>
                </div>

                {/* Add more questions as needed */}
            </div>
        </div>
    );
};

export default FAQ;
