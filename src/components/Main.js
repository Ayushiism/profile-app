import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Display from './Display';

function Main() {
    const [userDetails,setUserDetails]=useState();
    const fetchInfo =async() => { 
        try{
            await axios.get('https://dummyjson.com/users').then((res) =>{
                console.log(res.data.users)
                setUserDetails(res.data.users);
            });
        }catch{
            console.log();
        }
    }
    useEffect(() => { 
            fetchInfo(); 
    }, [])
  return (
    <div>
        <Display userDetails={userDetails}/>
    </div>
  )
}

export default Main