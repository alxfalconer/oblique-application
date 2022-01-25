import React, { useState } from 'react';
const api = "http://localhost:5000/"

export const DilemmaForm = (props) => {
  const [input, setInput] = useState("");


  const handleChange = e => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch(api + "dilemmas", {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          dilemma_text: input
        })
  }).then(() => {
    props.onSubmit({
        dilemma_text: input
    
    });
    setInput('');
    console.log({
        dilemma_text: input
    })
  })
}

  return (
    <div>
    <form onSubmit={handleSubmit} className='poem-form'>

          <input
            placeholder='Enter a dilemma'
            value={input}
            onChange={handleChange}
            name='text'
            className='poem-input'
          />
         
          <button onClick={handleSubmit} className='submit-btn'>
            Submit
          </button>
    </form>
    </div>
  );
}