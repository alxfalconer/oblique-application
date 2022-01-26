import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const api = "https://oblique-application.herokuapp.com/"

export const Login = ({ setUser, setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate(); // Used for redirect after login

  const handleChange = (e) => {
    if (e.target.name === "email") setEmail(e.target.value);
    if (e.target.name === "password") setPassword(e.target.value);
  };

  // Handle login function
  const handleLogin = (e) => {
    e.preventDefault();
    const loginObj = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    };
    fetch(api + "login", loginObj)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!!data.id) {
          setUser(data);
          setLoggedIn(true);
          history.push("/gallery");
        }
      })
      window.alert("We don't recognize that email and/or password. Please try again or click below to register.")
      setEmail("")
      setPassword("")
  };

  // Login form
  return (
    <div className="login-form">
      <h1>Welcome Back!</h1>
      <Form onSubmit={handleLogin} style={{ margin: "auto", width: "50%" }}>
        <Form.Group className="mb-4" controlId="formBa  cEmail">
          <Form.Label></Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleChange}
            name="email"
            value={email}
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label></Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handleChange}
            name="password"
            value={password}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};
