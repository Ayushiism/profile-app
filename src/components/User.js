import React from 'react'
import './User.css'

function User({userDetails,handleUser}) {
    const users = userDetails.slice(1,3);
    // console.log(userDetails.slice(1,3));
  return (
    <div>
        <div className='crousal1'>
          <div className='wrapper'>
          </div>
          <ul className='carousel'>
            {
              users && users.map((curUser,index)=>{
                return <li className='item' key={`__${index}`} onClick={(e)=>handleUser(curUser,e)}>
                <img className='imageList' src={curUser.image} alt="" key={`_${index}`}/>
                </li>
              })
            }
          </ul>
        </div>
    </div>
  )
}

export default User