import React from 'react'
import { useEffect, useState } from 'react';
const Gallery = () =>{

   
    return (<div>
        <div className='gallery-outbox'>

    </div>
    
    <div className='group-img'>
        {/* {
            [0,1,2,3].map((i)=>{
                <motion.img
                    key= {i}
                    src = {process.env.PUBLIC_URL +`/images/image${i+1}.jpg`}
                    initial = {{opacity: 0, y:points[i], x:points[i].x}}
                    whileInView = {{opacity: 0, y:0, x:0}}
                    transition = {{duration :1, delay: 0}}
                />
            })
        } */}
    </div>
    </div>
    );
}

export default Gallery;