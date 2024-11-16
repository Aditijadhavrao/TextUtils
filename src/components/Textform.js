import { useState } from "react"
import React from 'react'



export default function Textform(props) {
    const handleOnChange = (event) => { 
        setText(event.target.value);
    }

    const HandleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
      props.ShowAlert("converted to Uppercase","success");
    }
    const HandleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.ShowAlert("converted to Lowercase","success");
    }


const [text, setText] = useState('');
  return (
    <>
    <div className="container">
        <h1 style={{color:(props.mode==='light'?'black':'white')}}>{props.heading}</h1>
        <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:(props.mode==='light'?'white':'grey'),color:(props.mode==='light'?'black':'white')}} id="myBox" rows="8"></textarea>
        </div>
            <button className="btn btn-primary mx-1" onClick={HandleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={HandleLowClick}>Convert to Lowercase</button>
    </div>
    <div className="container my-3" style={{color:(props.mode==='light'?'black':'white')}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 *(text.split(" ").length) }mins read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something in textblock to preview it here'}</p>
    </div>
    </>
  )
}
