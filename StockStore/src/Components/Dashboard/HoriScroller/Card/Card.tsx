import React, { FormEvent, useState } from 'react'
import './Card.scss'
import ApexCharts from 'apexcharts'

interface cardProps {
    name:string,
    price:number,
    count:number,
    img:string,
}



export default function Card(props:cardProps) {
    
    
    
    
    const handleSubmit=(e:any)=>{
        e.preventDefault()
        setCount(count-countRef)
        setCountRef(0)

    }

    const handleChange=(e:any)=>{
        const temp=parseInt((e.target as HTMLInputElement).value)
        setCountRef(temp?temp:0)
    }

    const [count,setCount]=useState(props.count);
    const [countRef,setCountRef]=useState(0);
  
    return (
    <div className='Card'>
        <img src={props.img} alt="MainImage" />
        <h1>{props.name}</h1>
        <h2>{`₹${props.price}/Stock`}</h2>
        <h2>{count+' Stocks remaining'}</h2>
        {/* <form onSubmit={handleSubmit}>
            <input type="text" value={countRef} onChange={handleChange} 
            style={(countRef>count)?{color:'red'}:{}}/>
            <input type="submit" value="Submit" disabled={countRef>count}/>
        </form> */}
    </div>
    )
}
