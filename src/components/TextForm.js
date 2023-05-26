import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log('onClick was clicked');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to upper case","success");
    }

    const handleLoClick = () => {
        // console.log('onClick was clicked');
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lower case","success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert(" Text cleared","success");
    }


    const handleOnChange = (event) => {
        // console.log("onChange clicked");
        setText(event.target.value);

    }

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard","success");

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ] +/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces","success");
    }

    const [text, setText] = useState('');
    // text = "new text"   // wrong way to chenge the text
    // setText("new text")   // correct way to chenge the text
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1> {props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black', pointer: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="7"></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUpClick}> Convert to Uppercase </button>
                <button className='btn btn-primary mx-2' onClick={handleLoClick}> Convert to Lowercase </button>
                <button className='btn btn-primary mx-2' onClick={handleClearClick}> Clear Text </button>
                <button className='btn btn-primary mx-2' onClick={handleCopy}> Copy text </button>
                <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces </button>

            </div>
            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>Your text summary </h3>
                <p><b>{text.split(" ").length}</b> words and <b>{text.length} </b> characters </p>
                <p><b>{0.008 * text.split(" ").length}</b> Minutes read </p>
                <h4>Preview</h4>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview here"}</p>
            </div>
        </>
    )
}

