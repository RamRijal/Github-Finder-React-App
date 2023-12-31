import React, { useState } from 'react'
import DisplayTable from './DisplayTable.jsx'
import Css from "../App.css"

const Profile = () => {
  const [data, setData] = useState({})
  const [username, setUsername] = useState('')
  const [repositories, setRepositories] = useState([])

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    /* API for github user fetched */
    const profile = await fetch(`https://api.github.com/users/${username}`)
    const profileJson = await profile.json();
    // console.log(profileJson);

    const repositories = await fetch(profileJson.repos_url)
    const repoJson = await repositories.json()
    console.log(repoJson);

    if (profileJson) {
      setData(profileJson)
      setRepositories(repoJson)
    }

  }
  return (
    <>
      <div style={{ padding: "20px", margin:"20px"}}>
        <div className="ui search">
          <div className="ui icon input">
            <i className="search icon"></i>
            
            <input
              className='prompt'
              type='text'
              value={username}
              placeholder="Search Username..."
              onChange={onChangeHandler} />

          </div>
        </div>

        <button
          className="ui twitter button"
          type='submit'
          onClick={submitHandler}
          style={{margin:"20px"}}>
          <i class="github icon"></i>
          Search
        </button>

        <DisplayTable data={data} repositories={repositories} />
      </div>
    </>
  )
}

export default Profile