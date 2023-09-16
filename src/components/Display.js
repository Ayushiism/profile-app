import React,{useState,useEffect} from 'react'
import User from './User'
import './Display.css'
import Logo from './pic1.jpg'

function Display(userDetails) {
    
    return (
    <div className="display">
        <h4></h4>
        <img className='img' src={Logo} alt="Logo" />
        <h4>Hello</h4>
        
    </div>
  )
}

export default Display