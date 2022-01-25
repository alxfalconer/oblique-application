import React, {useState} from 'react';
import {Calendar} from './Calendar';
import {Strategy} from './Strategy'
import { Button, Form, FormControl, CardGroup } from "react-bootstrap";

export const Dilemma = ({dilemmas, deleteDilemma, updateDilemma}) => {


  return (dilemmas.map((dilemma, index) => (
    <CardGroup>
    <div className='container' key={index}>
      <br></br>
      <Calendar />
      <br></br>
      {/* <div >D I L E M M A:</div> */}
      <div className="dbox" key={dilemma.id} onClick={() => dilemmas(dilemma.id)}>
        {dilemma.dilemma_text}
      </div>
      {/* <button onClick={() => updateDilemma(dilemma.id)} className="delete-btn"
     >Update</button> */}
      <br></br>
      <Strategy />
     {/* <div class="divider"/> */}
     <br></br>
     <button onClick={() => deleteDilemma(dilemma.id)} className="delete-btn"
     >Clear</button>
     <br></br><br></br><br></br>
     </div>
     </CardGroup>
  )));
};