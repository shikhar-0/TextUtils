import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=> {
    // console.log("UpperCase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  }
  const handleLoClick = ()=> {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");

  }
  const handleClearClick = ()=> {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared!", "success");

  }
  const handleCopy = ()=> {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");

  }
  const handleExtraSpace = ()=> {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");

  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaking!", "success");

  }
  const handleOnChange = (event)=> {
    // console.log("OnChange");
    setText(event.target.value);
  }

  const [text, setText] = useState("");
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Exra Space</button>
      <button className="btn btn-primary mx-1" onClick={speak}>Read Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{text.split(" ").length * 0.008} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter something in textbox to preview it here.'}</p>
    </div>
    </>
  )
}