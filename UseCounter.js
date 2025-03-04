import { useState } from "react";

export const useCounter = ( initialValue = 10 ) => {

    const [counter, setCounter] = useState(initialValue);

    const incerement = ( value = 1 ) => {
        setCounter(counter + 1);
    };
    const decrement = ( value = 1 ) => {
      // if( counter === 0 ) return;
        setCounter(counter - 1);
    };
    const reset = () => {
        setCounter( initialValue);
    };


    return{
        counter,
        incerement,
        decrement,
        reset,



    };// se utiliza llaves porque es un objeto, al momento de desestructurar se utilizan llaves, si fuera un arreglo se utilizan corchetes
}
