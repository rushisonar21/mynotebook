import React,{ useContext, useState } from "react";
import userContext from "./userContext";
import alertContext from "./alertContext";

const UserState = (props) => {
    const base_url = "https://mynotebook-tsmw.onrender.com"
    const alert_context = useContext(alertContext)
    const updateAlert = alert_context.updateAlert
    const addUser = async (name, email, password)=>{
        try {
            let response = await fetch(`${base_url}/api/auth/createUser`, {
              method: "POST",
              headers: {
                "Accept": "*/*",
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                "name": name,
                "email": email,
                "password": password
              })
            });
            if (response.status === 200) {
              let new_user = await response.json()
              updateAlert("user created successfully","success")
              return "success"
            }
            if (response.status === 409) {
              updateAlert("user already exists","warning")
              return "user already exists"
            }
          }
          catch (error) {
            console.log(error)
          }
    }

    const LoginUser = async (email, password)=>{
      try {
        let response = await fetch(`${base_url}/api/auth/login`, {
          method: "POST",
          headers: {
            "Accept": "*/*",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "email": email,
            "password": password
          })
        });
        if (response.status === 200) {
          let logged_user = await response.json()
          localStorage.setItem('token',logged_user.authToken)
          updateAlert("Login successfull","success")
          return "success"
        }
        else if(response.status === 409 || response.status === 400){
          updateAlert("Wrong creditentails","warning")
          return "wrong creds"
        }
      }
      catch (error) {
        console.log(error)
      }
    }
  return (
    <userContext.Provider value={{addUser, LoginUser}}>
        {props.children}
    </userContext.Provider>
  )
}

export default UserState
