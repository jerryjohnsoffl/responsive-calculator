//import './App.css';
import { useState } from 'react';
import Numbers from './Numbers';
import Light from './assets/Light.svg'

function App() {
  let char=['C','+/-','%'];
  const op=["÷","×","-","+","="]
  const [Display, SetDisplay]=useState("")
  const [Operation, SetOperation]=useState("")

  const handleClear = ()=> {
    SetDisplay("");
    SetOperation("");
  }

  const handleNumberClick = (num)=> {
    SetDisplay((prev)=> prev + num)
  }

  const handleOperator = (op)=> {
    if(Display){
      SetOperation((prev)=> prev + Display + " " + op + " ")
    }
    /* if(Display || op) {
      SetOperation((prev)=> prev + Display)
    } */
    SetDisplay("")
  }

  const handleEquals = ()=> {
    if(Operation && Display){
      const fullDisplay = Operation + Display;
      const tokens = fullDisplay.split(" ")
      let result = parseFloat(tokens[0]);
      for(let i=1; i<tokens.length;i+=2){
        const op = tokens[i];
        let nextNum = parseFloat(tokens[i+1]);
        switch(op) {
          case "÷":
            result/=nextNum;
            break
          case "×":
            result*=nextNum;
            break
          case "-":
            result-=nextNum;
            break
          case "+":
            result=result+nextNum;
            break
        }
        SetDisplay(result.toString());
        SetOperation("");
      }
    }
  }

  return (
    <div className="App bg-off-white container max-w-md p-4">
      <div className="h-1/4 w-full flex flex-col relative">
        <div className="h-1/2 justify-end flex items-center mr-4 w-full text-right text-3xl">{Operation}</div>
        <div className="h-1/2 justify-end flex items-center mr-12 w-full text-right text-5xl">{Display || 0}</div>
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
              {char.map((i)=> i==='C'? <button onClick={handleClear} className='flex justify-center items-center h-16 w-16 bg-dull-white rounded-3xl font-normal text-2xl'>{i}</button> : <button className='flex justify-center items-center h-16 w-16 bg-dull-white rounded-3xl font-normal text-2xl'>{i}</button>)}
            </div>
            <Numbers handleNumberClick={handleNumberClick} />
          </div>
          <div className="grid grid-cols-1 ml-4 gap-4">
            {op.map((i)=> i==='='? <button onClick={handleEquals} className='flex justify-center items-center h-16 w-16 text-white bg-blue-600 rounded-3xl font-normal text-3xl'>{i}</button> : <button onClick={()=> handleOperator(i)} className='flex justify-center items-center h-16 w-16 text-white bg-blue-600 rounded-3xl font-normal text-3xl'>{i}</button>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
