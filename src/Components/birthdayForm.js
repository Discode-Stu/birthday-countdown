import React, { useState, useEffect } from 'react';
import Datepicker, {CalendarContainer} from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import Clock from "./clock"

const BirthdayForm = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [formCompleted, setFormCompleted] = useState(false)

  const MyContainer = ({ className, children }) => {
    return (
      <div style={{ padding: "16px", background: "#216ba5", color: "#fff" }}>
        <CalendarContainer className={className}>
          <div style={{ background: "#f0f0f0" }}>
          </div>
          <div style={{ position: "relative" }}>{children}</div>
        </CalendarContainer>
      </div>
    );
  };

  const handleGenerate = () => {
    console.log(selectedDate, formCompleted)
    setFormCompleted(true)
  }

  const RenderClock = () => {
    // const birthdate = selectedDate
    const stuffRendered = 
      formCompleted 
      ? <Clock birthdayFormState={selectedDate}/> 
      : <div>
          <div className="datepicker-container">
            <Datepicker 
                selected={selectedDate} 
                onChange={date => setSelectedDate(date)} 
                
                showTimeSelect 
                showTimeInput
                timeFormat="HH:mm"
                timeIntervals={5}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
                calendarContainer={MyContainer}
                isClearable
                placeholderText="What's your birthday?"
            />
        </div> 
        <button onClick={handleGenerate} style={{background: 'lightgreen' }}>Generate Countdown </button>
      </div>
      
      return stuffRendered
  }


  return ( 
    <div>

      <RenderClock />

      


      
    </div>
  );
}

export default BirthdayForm