import {React,useState} from 'react'


export default function Textform()
{
    const [text,setText]=useState("This is some text");
    const handleOnChange=(event)=>
    {
        console.log("onChange");
        setText(event.target.value);
       
    }
    const handleOnClick=()=>
    {
        console.log("OnClikc");
        const newText=text.toUpperCase();
        setText(newText);
        
    }
    
    return(
        
        <div>
            <textarea  className='border-2' value={text} onChange={handleOnChange}></textarea><br/>
            <button className='bg-blue-600 hover:bg-slate-500 shadow rounded p-2' onClick={handleOnClick}>Click</button>
        </div>
    )
}