import { useEffect, useRef } from "react";

export default function UseRef(){
    const countValue = useRef(0);
    const divReference = useRef();
    const inputReference = useRef();

    function handleClick(){
        countValue.current++;
        console.log(countValue.current);
    }

    useEffect(()=>{
        const getDivRef = divReference.current;
        console.log(getDivRef);
    },[])

    useEffect(()=>{
        inputReference.current.focus();
    },[])


    return(
        <div>
            <h1>UseRef Hook</h1>
            <button onClick={handleClick}>Click Me</button>
            <div ref= {divReference} className="hello">Hello World</div>
            <p>When the page will be loaded, Focus will be on input field.</p>
            <input ref= {inputReference} type="text" placeholder="Enter something" />
        </div>
    );
}


// Check out theory behind this hook, execution of statement inside useEffect hook and everything.