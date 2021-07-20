import React, { useContext } from 'react';
import NumContext from './context/NumContext';

const Navbar = (props) =>{
const context = useContext(NumContext)



    return (
        <div>
            Hello { context.val }
        </div>
    )
}


export default Navbar;