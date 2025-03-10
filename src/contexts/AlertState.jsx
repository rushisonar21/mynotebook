import { useState } from "react";
import alertContext from "./alertContext";

const AlertState = (props)=>{
    const [alert,setAlert] = useState(null)

    const updateAlert = (msg, type)=>{
        setAlert({"msg":msg,"type":type})

        setTimeout(()=>{
            setAlert(null)
        },1500)
    }
    return(
        <alertContext.Provider value={{alert, updateAlert}}>
            {props.children}
        </alertContext.Provider>
    )
}

export default AlertState;