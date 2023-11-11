"use client"
import React, {useState, useEffect} from 'react'
import './CSS/Navbar.css'


export default function Navbar() {
    const [q, setQ] = useState()
    const [pizza, setPizza] = useState([])
    const [searchParam] = useState(['name'])
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

  function search(){
    pizza.filter((item) => {
      return searchParam.some((newItem) =>{
        return (
          item[newItem]
            .toString()
            .toLowerCase()
            .indexOf(q.toLowerCase()) > -1
        )
      })
    })
  }
    
  return (
    <nav className='flex justify-between items-center'>
        <div>
            <h1>PizzaHut</h1>
        </div>
        <form>
            <input
              type='search'
              value={q}
              onChange={(e) => setQ(e.target.value)}
            ></input>
            <button>search</button>
        </form>
        <div>
            <h2>ADD TO CART</h2>
        </div>
    </nav>
  )
}
