import React, { useState ,useContext} from 'react'
import userContext from '../contexts/userContext'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
    const navigate = useNavigate()
    const context = useContext(userContext)
    const {addUser} = context
    const [user,setUser] = useState({"name":"","email":"","password":""})
    const handleOnchange = (element)=>{
        setUser({...user,[element.target.id]:element.target.value})
    }
    const handleClick = async (element)=>{
        element.preventDefault();
        let response = await addUser(user.name,user.email,user.password)
        if(response==="success"){
            navigate('/myNotebook/Login')
        }
        setUser({"name":"","email":"","password":""})
    }
    return (
        <div>
            <h3 className='text-center'>Create new user</h3>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" value={user.name}  onChange={handleOnchange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email"  value={user.email} onChange={handleOnchange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={user.password} id="password" onChange={handleOnchange}/>
                </div>
                <button disabled={user.name.length<2 || user.email.length<3 || user.password.length<3} type="submit" className="btn btn-primary" onClick={handleClick}>SignIn</button>
            </form>
        </div>
    )
}

export default Signin
