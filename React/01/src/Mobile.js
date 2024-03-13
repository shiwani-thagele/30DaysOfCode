import React from 'react'
import MobileList from './MobileList'

const book1 = {
     image : 'https://unsplash.com/photos/black-smartphone-displaying-11-00-83ypHTv6J2M',
     title : ' Realme C53',
     price : "100"
}



function Mobile() {
  return (
    <div>
        <MobileList  greet="hellow"/>
        <MobileList image= {book1.image}  title={book1. title} proce= {book1.price}/>
        
    </div>
  )
}

export default Mobile