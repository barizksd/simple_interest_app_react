import { useState } from 'react'

import './App.css'
import { Button, TextField } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    <div className = " d-flex justify-content-center align-item-center  "style={{width:"100%", height:"100vh"}}>
      <div className ="bg-light p-4 rounded-2 m-3 shadow-lg">
      <h1>simple Interest App</h1>
      <p>Calculate Your simple interest Easliy</p>
      <div className="bg-warning p-3 d-flex rounded flex-column text-center">
        <h1 className='mt-3'>₹ 1000</h1>
        <p>Total Simple interest </p>
       
      </div>
      <div className="mb-3 mt-3">
      <TextField id="outlined-basic" label="Principle Amount" variant="outlined"  className='w-100 price'/>
      </div>
      <div className="mb-3 mt-3">
      <TextField id="outlined-basic" label="Rate of Interst" variant="outlined" className='w-100 Rate'/>
      </div>
      <div className="mb-3 mt-3">
      <TextField id="outlined-basic" label="Year" variant="outlined" className='w-100 Year' />
      </div>
      <div className="mb-3 mt-3">
      <Button variant="contained" className="w-50 ">calculate</Button>
      <Button variant="outlined" className="m-3 ">Reset</Button>
      </div>
      </div>
      
    </div>
    </>
  )
}

export default App
