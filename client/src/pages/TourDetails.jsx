import React, { useEffect, useRef, useState } from 'react'
import '../styles/tour-details.css'
import { Container, Row, Col, Form, ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
// import tourData from '../assets/data/tours'
import calculateAvgRating from '../utils/avgRating'
import avatar from '../assets/images/avatar.jpg'
import Booking from '../components/Booking/Booking'
import Newsletter from '../Shared/Newsletter';
import useFetch from './../hooks/useFetch';
import { BASE_URL } from './../utils/config';


const TourDetails = () => {

    const { _id } = useParams()

    const reviewMsgRef = useRef('')

    const [tourRating, setTourRating] = useState(null)

    //fetch data from database
    // const tour = tourData.find(tour => tour._id === _id)
    const { data: tour, error, loading } = useFetch(`${BASE_URL}/tours/${_id}`);

    // destructure properties from tour object
    const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize } = tour || {};

    const { totalRating, avgRating } = calculateAvgRating(reviews)

    //format date
    const options = { day: 'numeric', month: 'long', year: 'numeric' };

    // submit request to the server 
    const submitHandler = e => {
        e.preventDefault()
        const reviewText = reviewMsgRef.current.value

        //bring an alert to see the code work
        alert(`${reviewText}, ${tourRating}`)

        //later we will call our api
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [tour])

    return (
        <>
            <section>
                <Container>
                    {
                        loading && <h4 className='text-center pt-5'>Loading.............</h4>
                    }
                    {
                        error && <h4 className='text-center pt-5'>{error}</h4>
                    }
                    {!loading && !error && <Row>
                        <Col lg='8'>
                            <div className="tour__content">
                                <img src={photo} alt="" />

                                <div className="tour__info">
                                    <h2>{title}</h2>
                                    <div className="d-flex align-items-center gap-5">
                                        <span className='d-flex align-items-center gap-1'>
                                            <span className='tour__rating d-flex align-items-center gap-1'>
                                                <i className="ri-star-fill" style={{ 'color': 'red' }}></i> {avgRating === 0 ? null : avgRating}
                                                {totalRating === 0 ? ('Not rated') : (<span>({reviews?.length})</span>)}
                                            </span>
                                        </span>

                                        <span>
                                            <i className="ri-map-pin-user-fill"></i>{address}
                                        </span>
                                    </div>
                                    <div className="tour__extra-details">
                                        <span><i className='ri-map-pin-2-line'>{city}</i></span>
                                        <span><i className='ri-money-dollar-circle-line'>${price} / per person</i></span>
                                        <span><i className='ri-map-pin-time-line'>{distance} k/m </i></span>
                                        <span><i className='ri-group-line'>{maxGroupSize} people</i></span>
                                    </div>
                                    <h5>Description</h5>
                                    <p>{desc}</p>
                                </div>
                                {/* =========== tour review section ==========*/}
                                <div className="tour__review mt-4">
                                    <h4>Reviews ({reviews?.length} reviews)</h4>

                                    <Form onSubmit={submitHandler}>
                                        <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                                            <span onClick={() => setTourRating(1)}>1 <i className="ri-star-s-fill"></i></span>
                                            <span onClick={() => setTourRating(2)}>2 <i className="ri-star-s-fill"></i></span>
                                            <span onClick={() => setTourRating(3)}>3 <i className="ri-star-s-fill"></i></span>
                                            <span onClick={() => setTourRating(4)}>4 <i className="ri-star-s-fill"></i></span>
                                            <span onClick={() => setTourRating(5)}>5 <i className="ri-star-s-fill"></i></span>
                                        </div>

                                        <div className="review__input">
                                            <input type="text" ref={reviewMsgRef} placeholder='Share your thoughts' required />
                                            <button className="btn primary__btn text-white" type='submit'>
                                                Submit
                                            </button>
                                        </div>
                                    </Form>
                                    <ListGroup className='user__reviews'>
                                        {reviews?.map(review => (
                                            <div className="review__item" key={review._id}>
                                                <img src={avatar} alt="" />

                                                <div className="w-100">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <h5>Mark</h5>
                                                            <p>{new Date("05-25-2023").toLocaleDateString("en-US", options)}</p>
                                                        </div>
                                                        <span className='d-flex align-items-center'>
                                                            5<i className="ri-star-s-fill"></i>
                                                        </span>
                                                    </div>
                                                    <h6>Amazing tour</h6>
                                                </div>
                                            </div>
                                        ))}
                                    </ListGroup>
                                </div>
                                {/* =========== tour review section END ==========*/}
                            </div>
                        </Col>

                        <Col lg='4'>
                            <Booking tour={tour} avgRating={avgRating} />
                        </Col>
                    </Row>
                    }
                </Container>
            </section>
            <Newsletter />
        </>
    )
}

export default TourDetails