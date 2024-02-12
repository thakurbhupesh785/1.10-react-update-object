// updater function - aloows update based on previous data
// c- previous count represent

import React, {useState} from 'react'

function MyComponent () {

  const [car, setCar] = useState({year:2024,make:'ford',model:'mustang'});

  function handleYearChange (e) {
    setCar(c => ({...c, year: e.target.value}));
  }
  function handleMakeChange (e) {
    setCar(c => ({...c, make:e.target.value}));
  }
  function handleModelChange (e) {
    setCar(c => ({...c, model:e.target.value}));
  }

  
  return (
    <div>
      <p>your fav car is {car.year} {car.make} {car.model}</p>
      <input type='number' value={car.year} onChange={handleYearChange}/><br/>
      <input type='text' value={car.make} onChange={handleMakeChange}/><br/>
      <input type='text' value={car.model} onChange={handleModelChange}/><br/>
    </div>
  )

}

export default MyComponent