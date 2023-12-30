import React, { useState } from 'react'

const Profile = () => {
  const[data,setData]=useState({})
  const[username,setUsername]=useState('')
  const onChangeHandler=(e)=>{
    setUsername(e.target.value);
  }
  const submitHandler= async (e)=>{
    e.preventDefault();
    const profile =await fetch(`https://api.github.com/search/users/${username}`)
    const profilejson=await profile.json();
    console.log(profilejson);
  }
  return (
    <div>
      <input type='text' value={username} onChange={onChangeHandler}/>
      <button type='submit' onClick={submitHandler}>Search</button>
    </div>
  )
}

export default Profile