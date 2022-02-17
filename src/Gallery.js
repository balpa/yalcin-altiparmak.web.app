import React, { useState } from 'react'
import ph1 from './photos/1.jpg'
import ph2 from './photos/2.jpg'
import ph3 from './photos/3.jpg'
import ph4 from './photos/4.jpg'
import ph5 from './photos/5.jpg'
import ph6 from './photos/6.jpg'


export default function Gallery() {

    let styles = {
        maxWidth: '90vw',
        maxHeight: "300px",
        padding: "10px",
        borderRadius: "25px",
    }

    return (
        <>

        <div className="gallery-content">
            <img  src={ph3} alt="" style={styles} />
            <img  src={ph4} alt="" style={styles} />
            <img  src={ph5} alt="" style={styles} />
            <img  src={ph1} alt="" style={styles} />
            <img  src={ph2} alt="" style={styles} />
            <img  src={ph6} alt="" style={styles} />
        </div>
       </> 
    )
}
