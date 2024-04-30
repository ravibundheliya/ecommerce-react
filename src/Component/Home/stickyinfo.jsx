import React from 'react'

function Stickyinfo() {
    return (
        <>
            <section className='new_fashion'>
                <div className='new_fashion_perent'>
                    <img src={require('../../img/asset 23.jpeg')} alt="" className='new_fashion_img' />
                    <div className='new_fashion_font'><p className='new_fashion_p'>TRENDING</p>
                        <h3>New Fashion</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nisi distinctio magni, iure deserunt doloribus optio</p>
                        <a className='stkbtn' href="index.html">shop now</a>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Stickyinfo
