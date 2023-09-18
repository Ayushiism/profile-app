import React,{useState,useEffect} from 'react'
import User from './User.js'
import './Display.css'
import {BsFillPersonFill,BsFillTelephoneFill} from "react-icons/bs"
import {BiHomeAlt,BiMessageAlt} from "react-icons/bi"

function Display({userDetails}) {
  const [currentActiverUser,setCurrentAtiveUser] = useState(
    {
      image: "",
      name: "",
      customerId: "",
      contactNo: "",
      email: "",
      address: ""
    }
  )
    const [prevTarget,setPreviousTarget] = useState('');
    const handleUser=(user,e)=>{
      if(prevTarget!=''){
        prevTarget.style.border='none'
      }
      setPreviousTarget(e.target)
      e.target.style.border = '1.5px solid white'

    setCurrentAtiveUser({...currentActiverUser,
      ['image']:user.image,['name']:user.firstName,
      ['customerId']:user.bank.cardNumber,['contactNo']:user.ssn,
      ['contactNo_']:user.phone,['email']:user.email,
      ['address']:user.company.address.address
    })
  }
    useEffect(()=>{
      let defaultuser=userDetails[0]
      defaultuser && setCurrentAtiveUser({...currentActiverUser,
        ['image']:defaultuser.image,['name']:defaultuser.firstName,
        ['customerId']:defaultuser.bank.cardNumber,['contactNo']:defaultuser.ssn,
        ['contactNo_']:defaultuser.phone,['email']:defaultuser.email,
        ['address']:defaultuser.company.address.address
      })
      },[userDetails])

    return (
    <div className="display">
        <div className='img-container'>
          <img className='mainImage' src={currentActiverUser.image} alt=""/>
          <User userDetails={userDetails} handleUser={handleUser}/>
        </div>
        <div className='content-conainer'>
          <div className='normal-details'>
            <h2 >{currentActiverUser.name}</h2>
            <h3 className='cid'>Customer ID: #{currentActiverUser.customerId.slice(1,10)}</h3>
            <h4 className='gray'>Account Owner | Since {currentActiverUser.customerId.slice(2,3)} Years</h4>
          </div>
          <div className='personal-details'>
            <span className='gray'><BsFillPersonFill/> {currentActiverUser.contactNo}</span><br/>
            <span className='gray'><BsFillTelephoneFill/> {currentActiverUser.contactNo_}</span><br/>
            <span className='gray'><BiMessageAlt/> {currentActiverUser.email}</span><br/>
            <span className='gray'><BiHomeAlt/> {currentActiverUser.address}</span>
          </div>
        </div>
    </div>
  )
}

export default Display