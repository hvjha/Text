import React, { useState } from "react";
import '../style/textForm.css';

export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase","success")
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase","success")
    }
    const handleClrClick = () =>{
        alert("you want to clar the screen?")
        let newText = "";
        setText(newText)
        props.showAlert("screen is cleared!","success")
    }
    const handleCpyClick = ()=>{
      // var text = document.getElementById('myBox');
      // text.select();
      // navigator.clipboard.writeText(text.value);
      navigator.clipboard.writeText(text);
      props.showAlert("copy text successfully","success")
    }
    const handleonchange=(event)=>{
        setText(event.target.value);
    }
  
  const [text,setText] = useState("");
  return (
    <>
    <div className="container"style={{color:props.mode ==='dark'?'white':'#042743'}}>
      <h1 className="head">{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text} onChange={handleonchange}
          style={{backgroundColor:props.mode ==='dark'?'#202646':'white',color:props.mode ==='dark'?'white':'#042743'}}
          id="myBox"
          rows="10"
        ></textarea>
      </div>
      <div className="button">
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper case</button>
      <button disabled={text.length===0} className="btn btn-primary my-2" onClick={handleLoClick}>Convert to lower case</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleClrClick}>Clear text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleCpyClick}>Copy text</button>
      </div>
    </div>
    <div className="container my-2"style={{color:props.mode ==='dark'?'white':'#042743'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word and {text.length} character</p>
        <p>{0.008*text.length}Minutes read</p>
        <h2>preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  );
}
