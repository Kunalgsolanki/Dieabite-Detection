import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './Componenet/Form';
import  Result  from "./Componenet/Result";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
         <div className='flex justify-center mt-10  mb-10 overflow-hidden'> 

        
        <Form />
        </div>
        
        } />

<Route path="/Result" element={
      <div className='flex justify-center mt-10  mb-10 overflow-hidden'> 

         <Result/>
    
          
        </div>

       
        
        } />
      </Routes>
    </Router>
  );
};

export default App;
