import React from 'react';
import {useState} from 'react';
const initialState = false;
const initial= {
    name : '',
    city : ''
}

export default function MyComponent(){

    const [toggleText, setToggleState] = useState(initialState);
    const [formData, setFormData] = useState(initial);

    function handleToggleText(){
        setToggleState(!toggleText)
    }

    function handleInputChange(event){
        setFormData({
            ...formData,
            name : event.target.value
        })
    }

    function handleCityChange(event){
        setFormData({
            ...formData,
            city : event.target.value
        })
    }    
    
    
    return(
        <div>
        <div>
            <h1>UseState Hook</h1>
            <button id="btn" onClick = {handleToggleText}>Toggle Text</button>
            {
            toggleText ? <h2>Hello World</h2> : null
            }
        </div>
        <div>
            <input onChange={handleInputChange} type="text" />
            <select onChange={handleCityChange} name="city" id="">
                <option value={""}>Select city</option>
                <option value={"Mumbai"}>Mumbai</option>
                <option value={"Maharastra"}>Maharastra</option>
                <option value={"Bengaluru"}>Bengaluru</option>
            </select>
           <div>
            <p>Name is {formData.name}</p>
            <p>City is {formData.city}</p>
           </div>
        </div>
      </div>
    );
}