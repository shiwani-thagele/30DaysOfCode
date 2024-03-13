import React from 'react'
import './MobileList.css'



function MobileList( props) {
    // const image = 'https://unsplash.com/photos/black-smartphone-displaying-11-00-83ypHTv6J2M';
    // const title = ' Realme C53'

    return (
        <div className='main'> 
        {console.log(props)}  
        {/* {props.greet} */}
     <img  className = "image" src='{props.image}'/>

        <div>
            <h2>
           { props.title}
            </h2>
            <p>{props.price}</p>
            <button>Add to Cart</button>
            </div>
        </div>
    )
}

export default MobileList
