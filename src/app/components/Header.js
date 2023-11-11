"use client"
import React, {useEffect, useState} from 'react'
import './CSS/Header.css'
import Card from './Card'
import axios from 'axios'


export default function Header() {
    const [pizza, setPizza] = useState([])
    

    function getPizzas() {
        try{
            axios.get('http://localhost:8000/posts')
                .then((res) =>{

                    setPizza(res.data)
                })
        }
        catch(err){
            console.log(err.message);
        }        
    }

    useEffect(() =>{
        getPizzas()
    },[])

    // console.log(pizza[0].name);
    return (
    <div className='grid grid-cols-4'>
        {
            pizza.map((item, id) =>{
                return(
                <Card key={id} {...item}/>
            )})
        }
            
        {/* <Card/> */}
        
    </div>
  )
}
