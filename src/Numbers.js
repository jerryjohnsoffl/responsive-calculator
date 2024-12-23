import React from 'react'
import Icon from './assets/Icon.svg'

const Numbers = () => {
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

    console.log(arr2D);

    arr2D.map((e)=> e.map((i)=> console.log(i)));
    const displayNum = arr2D.map((e)=> e.map((item)=> {
        return(<button className='flex justify-center items-center w-16 h-16 bg-white rounded-3xl font-normal text-2xl'>{item}</button>)
    }))
    return (
        <div className='grid grid-cols-3 gap-4 mt-4'>
            {displayNum}
            <button className="flex justify-center items-center h-16 w-16 bg-white rounded-3xl">
                <img src={Icon} alt="" />
            </button>
        </div>
    )
}

export default Numbers