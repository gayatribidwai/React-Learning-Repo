import { useContext } from "react";
import { GlobalContext } from "../context";

export default function UseContext(){
    const {setTheme, theme} = useContext(GlobalContext);
    
    return(
        <div>
            <h1>UseContext Hook</h1>
            <button onClick={()=> setTheme(theme === 'light' ? 'dark' : 'light')}>Change Theme</button>
        </div>
    );
}