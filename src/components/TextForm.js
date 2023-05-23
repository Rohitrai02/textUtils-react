import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () =>{
        // console.log('onClick was clicked');
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () =>{
        // console.log('onClick was clicked');
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log("onChange clicked");
        setText(event.target.value);
    }

    const[text, setText] = useState('');
    return (
        <>
        <div className='container my-2'>
        <h1> {props.heading} </h1>
            <div className="mb-3"> 
            <textarea className="form-control"  value = {text} onChange = {handleOnChange} id="myBox" rows="7"></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpClick}> Convert to Uppercase </button>
            <button className='btn btn-primary mx-2' onClick={handleLoClick}> Convert to Lowercase </button>
        </div>
        <div className='container my-3'>
            <h3>Your text summary </h3>
            <p><b>{text.split(" ").length}</b> words and <b>{text.length} </b> characters </p>
            <h4>Preview</h4>
            <p>{text}</p>
        </div>
        </>
    )
}

