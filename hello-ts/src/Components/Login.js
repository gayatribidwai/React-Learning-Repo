import { useCallback, useContext } from "react"
import { GlobalContext } from "../context"

export default function Login(){
    const {theme} = useContext(GlobalContext)
return(
    <div>
        <h2>Login</h2>
        <button style = { theme === 'dark' ? {backgroundColor: "yellow", color: "#000"} : {backgroundColor: "black", color : "#fff"} }>Login</button>
    </div>
);
}