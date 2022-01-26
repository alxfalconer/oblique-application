import React, { useState } from 'react';
import {DilemmaForm} from './DilemmaForm';
import {Dilemma} from './Dilemma';
const api = "https://oblique-application.herokuapp.com/"

export const DilemmaList = () => {
  const [dilemmas, setDilemmas] = useState([]);

  const getDilemma = (dilemma) => {
    const newDilemmas = [...dilemmas, dilemma];
    setDilemmas(newDilemmas);
    fetch(api + "/dilemmas").then((result) => {
      result.json().then((resp) => {
        setDilemmas(resp)
        console.log({dilemma})
      })
    })
  }

  const deleteDilemma = (id) => {
    const deleteArr = [...dilemmas].filter(dilemma => dilemma.id !== id);
    fetch(api + `dilemmas/${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => { 
        console.log(resp)
        setDilemmas(deleteArr)
      })
    })
  }

  const updateDilemma = (id, newDilemma) => {         // Updates selected alert
    console.log("updateDilemma = ", id, newDilemma);
    const updateObj = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        dilemma_text: newDilemma
      }),
    };
    fetch(api + "dilemmas/" + id, updateObj)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log("delete err = ", err));
  };

  return (
    <>
    <br></br>
    <br></br>
      <DilemmaForm onSubmit={getDilemma} />
      <Dilemma
        dilemmas={dilemmas}
        deleteDilemma={deleteDilemma}
        updateDilemma={updateDilemma}
      />
    </>
  );
}
