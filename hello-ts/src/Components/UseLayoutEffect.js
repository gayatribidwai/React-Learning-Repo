// Use Layout Effect Hook
// Almost similar to Use Effect Hook with slite difference.
// difference : Whenever the component is getting rendered there is process called paint, 
// so the UseEffect is called once the paint process is completed by the browser.
// on the other side Use Layout Effect will be called when the component is rendered but until unless the browser will complete the paint process,
// it will not wait before that only these hooks will be getting called.
// Any kind of Dom Manipulation is possible using this UseLayoutEffect Hook.



import { useEffect, useLayoutEffect, useRef} from "react"

export default function UseLayoutEffect(){
    const divRef = useRef();
    const inputRef = useRef();

    useEffect(()=>{
        console.log("use Effect Hook called.");
        inputRef.current.value = 'John Doe';
    },[])

    useLayoutEffect(()=>{
        console.log("use Layout Effect Hook called.")
        const getDivRefCurrent = divRef.current;
        console.log(getDivRefCurrent);
        getDivRefCurrent.style.opacity = 0;

        setTimeout(()=>{
            getDivRefCurrent.style.opacity = 1;
            getDivRefCurrent.style.color = 'orange';
        },5000)

        console.log(inputRef.current);
        // Use Layout Effect will be called when the component is rendered but until unless the browser will complete the paint process

        

    },[])


    return(
        <div>
        <h1>Use Layout Effect Hook</h1>
        <div ref={divRef}>Hello World</div>
        <input ref={inputRef} type="text" value={'Sangam'}/>
        </div>
    );
}