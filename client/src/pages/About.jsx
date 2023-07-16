import React from 'react'
import CommonSection from '../Shared/CommonSection'
import { Container, Col, Row } from 'reactstrap';
import Newsletter from '../Shared/Newsletter';
import '../styles/about.css'

import profilePicOne from "../assets/images/ava-1.jpg"
import world from "../assets/images/world.png"
import tour1 from "../assets/images/tour-img01.jpg"
import tour2 from "../assets/images/tour-img02.jpg"
import tour3 from "../assets/images/tour-img03.jpg"
import tour4 from "../assets/images/tour-img04.jpg"
import tour5 from "../assets/images/tour-img05.jpg"

const About = () => {
    return (
        <>
            <CommonSection title={'About Us'} />

            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className='top__container'>
                                <div className='text-center'>
                                    <h1>Our Mission</h1>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="6">
                            <div className='about__container'>
                                <div className='about__text'>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className='about__container'>
                                <div className='about__text'>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="12">

                            <div className='title text-center mt-5 mb-5'>
                                <h2>Our Elite Staffs</h2>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="12">
                            <div className='card_list d-flex justify-content-around flex-wrap'>
                                <div className="card mb-5">
                                    <img src={profilePicOne} alt="John" />
                                    <h2>John Doe</h2>
                                    <p class="title">CEO & Founder, Example</p>
                                    <p>Harvard University</p>
                                    <a href="#"><i className="fa fa-dribbble"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <p><button>Contact</button></p>
                                </div>
                                <div class="card mb-5">
                                    <img src={profilePicOne} alt="John" />
                                    <h2>John Doe</h2>
                                    <p class="title">CEO & Founder, Example</p>
                                    <p>Harvard University</p>
                                    <a href="#"><i className="fa fa-dribbble"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <p><button>Contact</button></p>
                                </div>
                                <div class="card mb-5">
                                    <img src={profilePicOne} alt="John" />
                                    <h2>John Doe</h2>
                                    <p class="title">CEO & Founder, Example</p>
                                    <p>Harvard University</p>
                                    <a href="#"><i className="fa fa-dribbble"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <p><button>Contact</button></p>
                                </div>
                                <div class="card mb-5">
                                    <img src={profilePicOne} alt="John" />
                                    <h2>John Doe</h2>
                                    <p class="title">CEO & Founder, Example</p>
                                    <p>Harvard University</p>
                                    <a href="#"><i className="fa fa-dribbble"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <p><button>Contact</button></p>
                                </div>
                                <div class="card mb-5">
                                    <img src={profilePicOne} alt="John" />
                                    <h2>John Doe</h2>
                                    <p class="title">CEO & Founder, Example</p>
                                    <p>Harvard University</p>
                                    <a href="#"><i className="fa fa-dribbble"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <p><button>Contact</button></p>
                                </div>
                                <div class="card mb-5">
                                    <img src={profilePicOne} alt="John" />
                                    <h2>John Doe</h2>
                                    <p class="title">CEO & Founder, Example</p>
                                    <p>Harvard University</p>
                                    <a href="#"><i className="fa fa-dribbble"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <p><button>Contact</button></p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section >

            <section>
                <Container>
                    <Col>
                        <div className='title text-center mt-5 mb-5'>
                            <h2>Our Sponsors</h2>
                        </div>
                        <div className='logos'>
                            <div className="logos_slide">
                                <img src={tour1} />
                                <img src={tour2} />
                                <img src={tour3} />
                                <img src={tour4} />
                                <img src={tour5} />
                            </div>
                            <div className="logos_slide">
                                <img src={tour1} />
                                <img src={tour2} />
                                <img src={tour3} />
                                <img src={tour4} />
                                <img src={tour5} />
                            </div>
                        </div>
                    </Col>
                </Container>
            </section>
            <Newsletter />
        </>
    )
}

export default About;