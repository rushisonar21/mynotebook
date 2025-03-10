import React, { useState,useContext, } from 'react'
import userContext from '../contexts/userContext'
import { useNavigate } from 'react-router'

const Login = () => {
    const navigate = useNavigate()
    const [logindetail,setLogindetail] = useState({"email":"","password":""})
    const context = useContext(userContext)
    const LoginUser = context.LoginUser
    const handleChange = (element)=>{
        setLogindetail({...logindetail,[element.target.id]:element.target.value})
    }
    const handleClick = async (element)=>{
        element.preventDefault();
        let response = await LoginUser(logindetail.email,logindetail.password)
        if(response==="success"){
            navigate('/myNotebook/Home')
        }
        setLogindetail({"email":"","password":""})
    }
    return (
        <div>
            <h3 className='text-center'>Login</h3>
            <form>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" value={logindetail.email} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={logindetail.password} onChange={handleChange}/>
                </div>
                <button disabled={logindetail.email.length<3 || logindetail.password.length< 5} type="submit" className="btn btn-primary" onClick={handleClick}>LogIn</button>
            </form>
        </div>
    )
}

export default Login
