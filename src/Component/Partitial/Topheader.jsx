import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

function Topheader() {
    return (
        <>
            <Container fluid>
                <Row className='text-center'>
                    <Col className='text-light pt-3 pb-3' style={{ backgroundColor: '#1f1f1f', fontSize: '14px' }}>
                        Join our showroom and get 25 % off ! Coupon code : Bangbang45
                        <div></div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Topheader
