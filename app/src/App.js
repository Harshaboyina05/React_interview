import React from 'react';
import './App.css';
import ListOFNames from './components/List'; // Corrected component name
import HomePage from './components/Home';
import SimpleForm from './components/Form';
import Counter from './components/Counter'
import EnhancedComponent from './components/hoc'
import Button from './components/component'
import FormAction from './components/formTest'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PropImplement from './components/props';

function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <EnhancedComponent/> */}
      {/* <Button/> */}
      <PropImplement/>
      {/* <FormAction/> */}
      {/* <EnhancedComponent/> */}
      {/* <Router>
        <Routes>
          {/* <Route exact path="/list" element={<ListOFNames />} /> */}
          {/* <Route exact path='/' element ={<HomePage />}/> */}
          {/* <Route exact path='/form' element={<SimpleForm/>}/> */}
          {/* <Route exact path='/counter' element={<Counter/>}/> */}
        {/* </Routes> */}
      {/* </Router> */} 
    </div>
  );
}

export default App;
