import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

// let [counter, setCounter] = useState(6) // ye state chnge krdeta ha or is chnege ko propagate kiya jata ha ui/dom k ander .. pr const use ni kr skte 
// counter is ma varibale ha or setCounter is ma method ha function ka and function's method responsible h vairbale ko update krne k liye

// let counter = 5 // jab koi value change waghera krnni ho to...let lete hain const nai .. ye kiun k ui ma propagate ni hogi tbhi comment kiya

// const AddingValue = ()=>{
//   counter = counter + 1
//   setCounter(counter)
//   console.log("clicked", counter);
// }

// const decreasingValue = ()=>{
//   counter = counter - 1
//   setCounter(counter)
//   console.log("clicked", counter);
// }
let [counter, setCounter] = useState(2)
const AddingValue = ()=>{
if(counter >= 20){
setCounter(counter = 20)
console.log("you cant go upper to 20");
}
else{
  setCounter(counter + 1) 
}
}

const decreasingValue = ()=>{
  if(counter <= 0){
   setCounter(counter = 0)
   console.log("sorry you cant go low to zero");
  }
  else{
    setCounter(counter - 1)
  }
}


  return (
    <>
      <h1>React Hook</h1>
      <h2>counter value is: {counter}</h2>
      <button className='hey' onClick={AddingValue}>Add</button> 
      <button onClick={decreasingValue}>Decrease</button>
    </>
  )
}

export default App
