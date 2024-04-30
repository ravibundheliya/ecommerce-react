import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Category(props) {
    return (
        <>
            <Container className='pt-5 pb-5'>
                <Row className='g-3'>
                    {
                        props.ctgdata.map((item) => {
                            return (
                                <Col className='col-4 col-md-2 text-center'>
                                    <div className='ctg'>
                                        <img src={item.image} alt="" />
                                        <h4>{item.title}</h4>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

export default Category
