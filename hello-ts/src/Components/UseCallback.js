import { useCallback, useState } from "react";
import Child from "./comp-three";


export default function UseCallback(){
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const memoriseSetCountOneFunc = useCallback(()=> setCount1(count1 +1), [count1]);
    const memoriseSetCountTwoFunc = useCallback(()=> setCount2(count2 +1), [count2]);


    return(
        <div>
            <h1>Use Callback Hook</h1>
            {count1} {count2}
            <Child text={'Button One'} onClick={()=> memoriseSetCountOneFunc}/>
            <Child text={'Button Two'} onClick={()=> memoriseSetCountTwoFunc}/>
        </div>
    );
}