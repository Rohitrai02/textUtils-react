import React,{useState} from 'react'

export default function TextForm(props) {
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary my-1 mx-1">Convert to Uppercase</button>
            <button className="btn btn-primary my-1 mx-1">Convert to Lowercase</button>
            <button className="btn btn-primary my-1 mx-1">Copy text</button>
            <button className="btn btn-primary my-1 mx-1">Clear Text</button>
            <button className="btn btn-primary my-1 mx-1">Remove Extra Spaces</button>
        </div>
    )
}
