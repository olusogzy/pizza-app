import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import './CSS/Card.css'

export default function Card({id, name, price, rate, img}) {
    console.log(name);
  return (
    <Link href={id}>
        <div className='m-6 max-w-sm bg-white rounded'> 
            <Image  
              src={img}
              alt='image'
              width={270}
              height={100}
              // style={{width: "300px", height: '150px'}}
            />
            <div className='p-3'>
              <h3>{name}</h3>
              <h4>${price}  </h4>
            </div>
        </div>

    </Link>
  )
}
