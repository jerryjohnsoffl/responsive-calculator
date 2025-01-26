//import './App.css';
import { useState } from 'react';
import Numbers from './Numbers';
import Light from './assets/Light.svg'
import Dark from './assets/Dark.svg'

function App() {
  let char=['C','+/-','%'];
  const op=["÷","×","-","+","="]
  const [Display, SetDisplay]=useState("")
  const [Operation, SetOperation]=useState("")
  const [IsDarkMode, SetIsDarkMode]=useState(false)

  const handleSpecialOps = (btn)=> {
    if(btn==="C"){
      SetDisplay("")
      SetOperation("")
    } else if(btn==="%"){
      SetDisplay((prev)=> prev? (parseFloat(prev)/100).toString() : "");
    } else if(btn==="+/-"){
      SetDisplay((prev)=> prev? (prev.startsWith("-")? prev.slice(1) : "-" + prev) : "")
    }
  }

  const handleNumberClick = (num)=> {
    SetDisplay((prev)=> prev + num)
  }

  const handleDelete = () => {
    SetDisplay((prev)=> prev.slice(0,-1))
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
    <div className={`App  container max-w-md p-4 ${IsDarkMode ? "bg-dark" : "bg-off-white"}`}>
      <div className="h-1/4 w-full flex flex-col relative">
        <div className={`h-1/2 justify-end flex items-center mr-4 w-full text-right text-3xl ${IsDarkMode? "text-dull-dark":"text-gray-500"}`}>{Operation}</div>
        <div className={`h-1/2 justify-end flex items-center mr-12 w-full text-right text-5xl ${IsDarkMode ? "text-white":"text-black"}`}>{Display || 0}</div>
        <div className={`absolute left-1/2 -translate-x-1/2 px-2.5 rounded-full w-14 h-7 container flex items-center justify-around space-x-2 ${IsDarkMode? "bg-toggle": "bg-white"}`}>
          <label htmlFor="check" className='h-full w-full relative flex items-center justify-between rounded-full'>
            <input type="checkbox" id='check' className='sr-only peer' onChange={()=> SetIsDarkMode((prev)=> !prev)}/>
            <span className='w-3/5 h-4/5 bg-dull-white absolute rounded-full left-1 top-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:left-8 transition-all duration-300'></span>
            <img src={Dark} className='h-3/5 w-2/5' alt="" />
            <img src={Light} className='h-3/5 w-2/5' alt="" />
          </label>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-4">
          <div className="container col-span-3">
            <div className="grid grid-cols-3 gap-4">
              {char.map((i)=> <button onClick={()=> handleSpecialOps(i)} className={`flex justify-center items-center h-16 w-16 bg-dull-white rounded-3xl font-normal text-2xl ${IsDarkMode ? "bg-dull-dark text-white":"bg-dull-white"}`}>{i}</button>)}
            </div>
            <Numbers 
            handleNumberClick={handleNumberClick}
            handleDelete={handleDelete}
            IsDarkMode={IsDarkMode}
             />
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
