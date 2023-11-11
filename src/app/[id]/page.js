"use client"
import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import axios from 'axios'
import StarRatings from 'react-star-ratings'
import './CSS/page.css'
import Clock from './icons/clock.svg'
import { useParams } from 'next/navigation'
import AddCart from '../components/AddCart'

export default function page({params}) {
    let [count, setCount] = useState(0)
    const id = params.id
    const [onePizza, setOnePizza] = useState([])




    function handleIncrease (){
      setCount(count++)
    }
    function handleDecrease (){
      setCount(count--)
    }
    function getPizzas(id) {
        try{
            axios.get('http://localhost:8000/posts/' + id)
                .then((res) =>{
                    setOnePizza(res.data)
                })
        }
        catch(err){
            console.log(err.message);
        }        
    }

    useEffect(() =>{
        getPizzas(id)
    },[])
    console.log(onePizza.name);
  return (
    <div className='one-pizza'>
      <div className='pe-3'>
        <h3>{onePizza.name}</h3>
        <h1>${onePizza.price}</h1>
        <Image 
          src={onePizza.img}
          alt='image'
          width={400}
          height={200}
        />
      </div>
      <div className='flex flex-col justify-center item-center ps-3'>
        <h1>{onePizza.name}</h1>
        <p>{onePizza.dsc}</p>
        <StarRatings 
          starDimension='20px'
          starSpacing='0px'
          style={{width: '30px'}}
        />
        <div className='flex'>
          <Image 
            src={Clock}
            alt='clock'
            width={14}
          />
          <span className='ps-2'>Ready in 40mins</span>
        </div>
        <div className='flex item-center mt-5'>
          <AddCart />
          <div className='increment-div flex justify-center items-center ms-2'>
            <button onClick={handleIncrease}>+</button>
            <p className='mx-2'>{count}</p>
            <button onClick={handleDecrease}>-</button>
          </div>
        </div>
        <div>
          <p className='mt-12'>Made in {onePizza.country}</p>
        </div>


      </div>

      
    </div>
  )
}
