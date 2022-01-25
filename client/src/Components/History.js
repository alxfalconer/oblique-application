import React from 'react';
import brianpeter from "./brianpeter.jpg"

export const History = () => {

    const learnMore = () => {
        window.open('https://en.wikipedia.org/wiki/Oblique_Strategies', '_blank')
    }
    
  return ( 
    
      <div>
      <h2>H I S T O R Y</h2>
      <div id="intro">In 1975, musician Brian Eno and multimedia artist Peter Schmidt devised a mysterious set of cards. 
        <br></br>Intended to help musicians break from the constraints of convention, the pair left inspiration to chance.</div>
      <h3><img className="brianpeter" src={brianpeter} alt="brianpeter"/></h3>
      <button onClick={learnMore} className="learn-btn">Learn More</button>
      <br></br>
      <br></br>
      </div>
  
  )}