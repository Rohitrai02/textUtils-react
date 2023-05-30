import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('');

    const handleUpperCase = () => {
        // console.log("uppercase was clicked")
        // setText('You have clicked on handle up click')
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Upper Case', 'success')
    }

    const handleOnChenge = (event) => {
        // console.log("onChange was clicked");
        setText(event.target.value);
    }

    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lower Case', 'success')
    }

    const handleCopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copied to Clipboard', 'success')
    }

    const handleClearText = () => {
        let newText = '';
        setText(newText);
        props.showAlert('Text removed', 'success')
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Extra Spaces Removed', 'success')
    }


    return (
        <>
            <div className='container' style ={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChenge} value={text} style = {{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary my-1 mx-1" onClick={handleUpperCase}> Convert to Uppercase </button>
                <button className="btn btn-primary my-1 mx-1" onClick={handleLowerCase}> Convert to Lowercase </button>
                <button className="btn btn-primary my-1 mx-1" onClick={handleCopy}> Copy text </button>
                <button className="btn btn-primary my-1 mx-1" onClick={handleClearText}> Clear Text </button>
                <button className="btn btn-primary my-1 mx-1" onClick={handleExtraSpaces}> Remove Extra Spaces </button>
            </div>
            <div className="container my-3" style ={{color:props.mode==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(' ').length - 1} words and {text.length} characters</p>
                <p>{0.008 * text.split(' ').length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it her"}</p>
            </div>
        </>
    )
}
