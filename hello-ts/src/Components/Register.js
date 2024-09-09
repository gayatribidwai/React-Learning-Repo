import { useCallback, useContext } from "react"
import { GlobalContext } from "../context"

export default function Register(){
    const {theme} = useContext(GlobalContext)
    return(
        <div>
            <h2>Register</h2>
            <button style = { theme === 'dark' ? {backgroundColor: "yellow", color: "#000"} : {backgroundColor: "black", color : "#fff"}}>Register</button>
        </div>
    );
}