import React from 'react';
// import './App.css';
import './styles/main.scss'


import BirthdayForm from './Components/birthdayForm'

function App() {
  return ( 
    <div>
      <header>
        <h1>Birthday Countdown</h1>
        <div className="header__skew">
          <div className="header__subskew">
          </div>
        </div>
      </header>
      <BirthdayForm />

    </div> 
  )
}

export default App;
