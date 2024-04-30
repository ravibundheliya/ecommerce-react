import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

function Collection(props) {
    return (
        <>
            <Container className='pt-5 pb-5 mb-5 mt-5'>
                <Row className='ps-sm-0 pe-sm-0 g-5'>
                    {
                        props.cltdata.map((item) => {
                            return (
                                <Col className='pt-3' sm={'6'} lg={'4'} >
                                    <div className='pup text-center text-light bg-dark'>
                                        <div className='ovr'>
                                            <img className='pimg' src={item.image} width={'100%'} alt="" />
                                        </div>
                                        <div className='ppcolor'></div>
                                        <div className='pin'>
                                            <h4>{item.title}</h4>
                                            <a href={item.link}>{item.linktitle}</a>
                                        </div>
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

export default Collection
