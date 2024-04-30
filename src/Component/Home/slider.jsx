import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Slider(props) {
    return (
        <>
            <Carousel>
                {
                    props.slddata.map((item) => {
                        return (
                            <Carousel.Item>
                                <div className='sld'>
                                    <img src={item.sldimg} alt="" className='d-none d-md-block sldimgcnt' />
                                    <img src={item.smsldimg} alt="" className='d-block d-md-none sldimgcnt2' />
                                </div>
                                <Carousel.Caption className='sld-text'>
                                    <a href={item.btnsrc}>{item.btnname}</a>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }

            </Carousel>
        </>
    )
}

export default Slider
