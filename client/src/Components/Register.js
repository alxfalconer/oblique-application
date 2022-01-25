import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
const api = "http://localhost:3001/"

export const Register = ({ setUser, setLoggedIn }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [username, setUsername] = useState("")
  const history = useNavigate()                      // Used for redirect after registration

  const handleChange = (e) => {
    if (e.target.name === "email") setEmail(e.target.value)
    if (e.target.name === "password") setPassword(e.target.value)
    // if (e.target.name === "username") setUsername(e.target.value)
  }

  const handleRegister = (e) => {                     // Handle registration function
    e.preventDefault()
    const createUser = {
      method: "POST",
      headers: {
            "Content-type": "application/json",
            Accepts: "application/json",
        },
        body: JSON.stringify({
            email,
            password,
            // username
        })}
        fetch(api + "signup", createUser)
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            setUser(data)
            setLoggedIn(true)
            history.push("/") 
          })
          .catch((err) => console.log(err))
  }

  return (
    <div className='login-form'>
      <h1>R E G I S T E R</h1>
      <Form onSubmit={handleRegister} style={{margin: "auto", width: "35%"}}>
        <Form.Group className='mb-4' controlId='formBasicEmail'>
          <Form.Label></Form.Label>
          <Form.Control type='email' placeholder='Enter email' onChange={handleChange} name='email' value={email}/>
        </Form.Group>
        <Form.Group className='mb-4' controlId='formBasicPassword'>
          <Form.Label></Form.Label>
          <Form.Control type='password' placeholder='Password' onChange={handleChange} name='password' value={password}/>
        </Form.Group>
        {/* <Form.Group className='mb-4' controlId='formBasicUsername'>
          <Form.Label></Form.Label>
          <Form.Control type='username' placeholder='Username' onChange={handleChange} name='username' value={username}/>
        </Form.Group> */}
        <Button variant='primary' type='submit'> Signup </Button>
      </Form>
    </div>
  )}
