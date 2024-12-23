//import './App.css';
import { useState } from 'react';
import Numbers from './Numbers';

function App() {
  let char=['C','+/-','%'];
  const op=["÷","×","-","+","="]
  const [Display, SetDisplay]=useState("")

  return (
    <div className="App bg-off-white container max-w-md p-4">
      <div className="h-1/4 w-full flex flex-col">
        <div className="h-1/2 justify-end flex items-center mr-4 w-full text-right text-3xl">Operation</div>
        <div className="h-1/2 justify-end flex items-center mr-4 w-full text-right text-5xl">{Display}</div>
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
