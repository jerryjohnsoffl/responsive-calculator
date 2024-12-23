//import './App.css';
import { useState } from 'react';
import Numbers from './Numbers';
import Light from './assets/Light.svg'

function App() {
  let char=['C','+/-','%'];
  const op=["÷","×","-","+","="]
  const [Display, SetDisplay]=useState("")

  switch(op) {
    case "÷":
      //op
      break
    case "×":
      //op
      break
    case "-":
      //op
      break
    case "+":
      //op
      break
  }

  return (
    <div className="App bg-off-white container max-w-md p-4">
      <div className="h-1/4 w-full flex flex-col relative">
        <div className="h-1/2 justify-end flex items-center mr-4 w-full text-right text-3xl">Operation</div>
        <div className="h-1/2 justify-end flex items-center mr-4 w-full text-right text-5xl">{Display}</div>
        <div className="absolute bg-white left-1/2 -translate-x-1/2 px-2.5 rounded-full w-14 h-7 container flex items-center justify-around space-x-2">
          <div className="h-full w-1/2">
            <img src={Light} alt="" className='h-full' />
          </div>
          <div className="w-1/2 h-full relative">
            <div className="absolute top-1/2 -translate-y-1/2 container rounded-full bg-dull-white w-5 h-5"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-4">
          <div className="container col-span-3">
            <div className="grid grid-cols-3 gap-4">
              {char.map((i)=> <button className='flex justify-center items-center h-16 w-16 bg-dull-white rounded-3xl font-normal text-2xl'>{i}</button>)}
            </div>
            <Numbers />
          </div>
          <div className="grid grid-cols-1 ml-4 gap-4">
            {op.map((i)=> <button className='flex justify-center items-center h-16 w-16 text-white bg-blue-600 rounded-3xl font-normal text-3xl'>{i}</button>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
