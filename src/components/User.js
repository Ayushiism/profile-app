import React,{useState,useEffect} from 'react'
import axios from 'axios';

function User() {
    const url = "https://dummyjson.com/users";
    const [data, setData] = useState([])
    //to fetch and store data
    
  return (
    <div>
        <p>Hello Users</p>
    </div>
  )
}

export default User