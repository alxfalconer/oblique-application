import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";

import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { History } from './Components/History'
import { Profile } from "./Components/Profile";
import { NoMatch } from "./Components/NoMatch";
import { Navigation } from "./Components/Navigation";
import React, { useState, useEffect, Fragment } from "react";
import "./App.css";

const api = "http://localhost:3001/"

function App() {
  const [user, setUser] = useState({}); // User info
  const [loggedin, setLoggedIn] = useState(false);

  useEffect(() => {
    // Matches user in system with session user, passes user info
    findMe();
  }, []);

  const findMe = () => {
    fetch(api + "me")
      .then((res) => res.json())
      .then((data) => {
        console.log("current user: ", data);
        if (!data.error) {
          setUser(data);
          setLoggedIn(true);
        }
      })
      .catch((err) => console.log("error =", err));
  };

  const handleLogout = () => {
    // Handles session logout
    const delObj = {
      method: "DELETE",
    };
    fetch(api + "logout", delObj)
      .then((res) => res.json())
      .then((res) => {
        setLoggedIn(false);
        setUser({});
        console.log(res);
      })
      .catch((err) => console.log("error =", err));
  };

  return (
    <Router>
      <Fragment>
      <div className="App">
        <div className="container">
          <Navigation loggedin={loggedin} handleLogout={handleLogout} />
          <Home component={Home} />
          <Routes>
            
            <Route exact path="/login" element={<Login setUser={setUser} setLoggedIn={setLoggedIn}/>}/>
              
          
            <Route exact path="/register" element={<Register setUser={setUser} setLoggedIn={setLoggedIn}/>}/>
        
       
            <Route exact path ="/history" element={<History/>}/>
            <Route exact path="/profile" element={<Profile setUser={setUser} setLoggedIn={setLoggedIn} user={user}/>}/>
              {/* {loggedin ? (
                <Profile user={user} setLoggedIn={setLoggedIn} />
              ) : (
                <Login setUser={setUser} setLoggedIn={setLoggedIn} />
              )}
            </Route> */}
            <Route component={NoMatch} />
          </Routes>
        </div>
      </div>
      </Fragment>
    </Router>
  );
}

export default App;
