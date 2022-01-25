import React from 'react'
import { Link } from 'react-router-dom';
import oblique from "./oblique.jpg"

export const Home = () => {
    const learnMore = () => {
        window.open('https://en.wikipedia.org/wiki/Lateral_thinking', '_blank')
    }
    
    
    return (
        <div className="homebackground" >
            <br></br>
            <h1 className="title">O B L I Q U E - A P P</h1>
            <div className="line">A tool for the cornered creative.</div>
            <div className="line">Let chance inspire <button className="lateral" onClick={learnMore}>lateral thinking</button> .</div>
            <br></br>
            <h3><img className="oblique" src={oblique} alt="oblique"/></h3>
            <br></br>
        <Link className= "delete-btn" to="/login">Login</Link>
        <div class="divider"/>
        <Link className= "delete-btn" to="/register">Register</Link>
        <div class="divider"/>
        <Link className= "delete-btn" to="/history">Learn</Link>
        <br></br>
        <br></br>

        <br></br>
        </div>
    )
}