import React from 'react';
import {useState,useEffect} from 'react';

export default function UseEffect(){
    const [count, setCount] =  useState(0);
    const [showText, setShowText] = useState(false);
    const [products, setProducts] = useState([]);

    async function fetchAllProducts()
    {
        try{
            const response = await fetch('https://fakestoreapi.com/products');
            const result = await response.json();
            // if(result && result.products) setProducts(result.products)
            if(result) setProducts(result);

        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        console.log("hello me!");
        // fetchAllProducts();
    }, []) // this will run when React first load the component.

    useEffect(() => {
        if(count === 5)
        {
            setShowText(true);
        }
        else if(count === 10)
        {
            fetchAllProducts();
        }
    }, [count])

    return(
        <div>
            <h1>UseEffect Hook</h1>
            <p>whenever count value == 5 the text will appear on screen.</p>
            <p>whenever count value == 10 the Products title will be visible.</p>
            <p>Count is {count}</p>
            <button onClick={() => {setCount(count+1)}} >Increment Count</button>
            {
                showText ? <h3>UseEffect Hook is working Correctly!</h3> : null 
            }
            <ul>
                {
                products && products.length > 0 
                    ? products.map((item)=> <li>{item.title}</li>) : null
                }

            </ul>
        </div>
    );
}