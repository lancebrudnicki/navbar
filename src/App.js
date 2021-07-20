// import Form from './componets/form'
import Navbar from'./componets/navbar'
import FormWrapper from './componets/formwrapper'
import Wrapper from './componets/wrapper'
import NumContext from './componets/context/NumContext';
import './App.css';
import React, {useState} from 'react';


function App() {
    const [val, setVal] = useState('');
    return (
        <NumContext.Provider value={{ val,setVal }}>
            <Wrapper>
                <Navbar/>
                <FormWrapper/>
            </Wrapper>
        </NumContext.Provider>
);
}

export default App;
