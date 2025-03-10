import React,{useContext} from 'react'
import Notes from './Notes'
import Addnote from './Addnote'
import userContext from '../contexts/userContext'
import Login from './Login'
import { useNavigate } from 'react-router-dom'


function Home() {
  const navigate = useNavigate()
  const user_context = useContext(userContext)
  const logged_user = user_context.loggeduser
  return (
    <div>
      {localStorage.getItem('token') ? <Notes/>:<Login/>}
    </div>
  )
}

export default Home
