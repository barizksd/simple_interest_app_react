import { useState } from 'react'

import './App.css'
import { Button, TextField } from '@mui/material'

function App() {

  const [principle, setPrinciple]=useState("")
  const [rate, setRate]=useState("")
  const [year, setYear]=useState("")
  const [isPrinciple,setIsPrinciple]=useState(true)
  const [isRate,setIsRate]=useState(true)
  const [isYear,setIsYear]=useState(true)
  const [interest,setInterest]=useState(0)

  const validate=(e)=>{
    const {name,value}= e.target
    console.log(name);
    console.log(value);
    // match
    if(value.match(`^[0-9]*$`)){
      if(name == "principle"){
        setPrinciple(value)
        setIsPrinciple(true)
      }else if(name == "rate"){
        setRate(value)
        setIsRate(true)
      }else{
        setYear(value)
        setIsYear(true)
      }
    } else{
      if(name == "principle"){
        setPrinciple(value)
        setIsPrinciple(false)
      }else if(name == "rate"){
        setRate(value)
        setIsRate(false)
      }else{
        setYear(value)
        setIsYear(false)
      }
      
    }
    
    
    
  }

  const handleReset =()=>{
    setPrinciple("")
    setRate("")
    setYear("")
    setIsPrinciple(true)
    setIsRate(true)
    setYear(true)
    setInterest(0)


  }
  const calculate =()=>{
    setInterest((principle*rate*year)/100)

  }

  
     

  return (
    <>

<div className="d-flex justify-content-center align-item-center text-center" style={{ width:"100%", height:"100vh"}}>
        <div className="bg-light p-5 rounded-2">
          <h1>Simple Interest App</h1>
          <p>Calculate Simple Interest Easily</p>
          <div className="bg-warning p-3 mt-4 d-flex rounded flex-column text-center ">
            <h1 className='mt-3'>{interest}</h1>
            <p>Total Simple Interest</p></div>
            <div className="mb-3"></div>
            <div className="mb-3"><TextField onChange={(e)=>validate(e)} name='principle' id="filled" label="Principle Amount" variant="filled" className='w-100' />
             {isPrinciple == false && <p className='text-danger'>*Invalid Input</p>}
            </div>
            <div className="mb-3"><TextField onChange={(e)=>validate(e)} name='rate' id="filled" label="Rate of Interest ( % )" variant="filled" className='w-100'/>
            {isRate == false && <p className='text-danger'>*Invalid Input</p>}
            </div>
            <div className="mb-3"><TextField onChange={(e)=>validate(e)} name='year' id="filled" label="Year" variant="filled" className='w-100'/>
            {isYear == false && <p className='text-danger'>*Invalid Input</p>}
            </div>
            <div><Button onClick={calculate} className='pe-5 ps-5 bg-success' variant="contained" size='large'>CALCULATE</Button> <Button onClick={handleReset}  className='pe-5 ps-5 border-success'  variant="outlined" size='large'>RESET</Button></div></div>
      </div>
    </>
  )
}
export default App

