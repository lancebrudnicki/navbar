import React, { useContext } from 'react';
import NumContext from './context/NumContext';

const Form = (props) =>{
    const context = useContext(NumContext)
    // const {setval:} = useContext(NumContext)
    const getName = (e) =>{
        context.setVal(e.target.value)
        // setVal(e.target.value)
    }


    return (
        <div>
            <form>
                Your Name:
                <input name="input" type="text" onChange={getName}></input>
            </form>
        </div>
    )
}


export default Form;