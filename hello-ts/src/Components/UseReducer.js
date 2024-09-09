import { useReducer } from "react";

const initialState = {
  count: 0,
  showCountFlag: true
};

function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "add":
      return {
        ...state,
        count:state.count+1
      };
    case "substract":
        return {
            ...state,
        count:state.count-1
        };
    case "reset":
        return {
            ...state,
        count:0
        };
    case "show":
        return {
            ...state,
            showCountFlag: !state.showCountFlag
        };
    default:
        return state;
  }
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  console.log(state);
  return (
    <div>
      <h1>UseReducer Hook</h1>
      {
        state.showCountFlag ? <h3>Count is {state.count}</h3> : null
      }
      <div>
        <button onClick={() => dispatch({ type: "add" })}>
          Increase count
        </button>
        <button onClick={() => dispatch({ type: "substract" })}>
          Decrease count
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset count</button>
        <button onClick={() => dispatch({ type: "show" })}>Show count</button>
      </div>
    </div>
  );
}
