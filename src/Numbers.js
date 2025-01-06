import React from 'react'
import DelIcon from './assets/Icon.svg'

const Numbers = ({handleNumberClick, handleDelete}) => {
    let num=[];
    for(let i=1;i<10;i++){
        num.push(i);
    }
    const rows = 3;
    const cols = 3;
    let arr2D=[];

    for(let i=0;i<num.length;i+=cols){
    arr2D.push(num.slice(i,i+cols));
    }

    arr2D.reverse();
    const newRow=[".",0];
    arr2D.push(newRow);

    const displayNum = arr2D.map((e)=> e.map((item)=> {
        return(<button onClick={()=>handleNumberClick(item)} className='flex justify-center items-center w-16 h-16 bg-white rounded-3xl font-normal text-2xl'>{item}</button>)
    }))
    return (
        <div className='grid grid-cols-3 gap-4 mt-4'>
            {displayNum}
            <button onClick={()=> handleDelete()} className="flex justify-center items-center h-16 w-16 bg-white rounded-3xl">
                <img src={DelIcon} alt="" />
            </button>
        </div>
    )
}

export default Numbers