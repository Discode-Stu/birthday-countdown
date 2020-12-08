import React from 'react';
import './App.css';


import BirthdayForm from './Components/birthdayForm'
import Countdown from './Components/coundown';

function App() {
  return ( 
    <div>
      <h1>Happy Birthday!</h1>
      <BirthdayForm />
      {/* <Countdown /> */}
    </div> 
  )
}

export default App;
