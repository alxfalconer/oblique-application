import React from "react";
import {Footer} from './Footer'
import {DilemmaList} from './DilemmaList'
import { ListGroup } from "react-bootstrap";


export const Profile = ({ user }) => {
  return (
    <div>
      <h1>C O N S U L T A T I O N</h1>
      <ListGroup variant="flush" style={{ width: "50%", margin: "auto" }}>
        <ListGroup.Item>{user.email}</ListGroup.Item>
      </ListGroup>
      <div className="back">Enter a dilemma. Draw a strategy. Save the pairings that serve you best.</div>
            <DilemmaList />
      <Footer />
    </div>
  );
};
