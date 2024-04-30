import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const obj = {
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    autoplayTimeout: 1500,
    responsiveClass: true,
    dots: false,
    responsive: {
        0: {
            items: 2,
        },
        576: {
            items: 3,
        },
        992: {
            items: 4,
        }
    }
}

function Productslide2(props) {
    return (
        <>
            <Container>
                <Row className=''>
                    <Col className='col-12 col-md-6 sld-ttl'>Best Seller</Col>
                    <Col className='col-12 col-md-6 sld-dtl text-start text-md-end pt-0 pt-md-4 text-uppercase'><a href="/">more products</a></Col>
                </Row>
                <hr />
            </Container>
            <Container className='pt-5 pb-5'>
                <OwlCarousel className='owl-theme'{...obj}>
                    {
                        props.prdsld2.map((item) => {
                            return (
                                <div className='item text-center'>
                                    <a href="index.html">
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={item.imageurl} width={"100%"} />
                                            <div className='icn'>
                                                <div><i className="bi bi-eye"></i></div>
                                                <div><i className="bi bi-heart"></i></div>
                                                <div><i className="bi bi-cart"></i></div>
                                            </div>
                                            <Card.Body>
                                                <Card.Title>{item.title}</Card.Title>
                                                <h4 className='fw-bold'><i className="bi bi-currency-rupee text-dark"></i>{item.price}</h4>
                                            </Card.Body>
                                        </Card>
                                    </a>
                                </div>
                            )
                        })
                    }
                </OwlCarousel>
            </Container >
        </>
    )
}

export default Productslide2
