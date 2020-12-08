import React, { useState } from 'react';
import Datepicker, {CalendarContainer} from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import Clock from "./clock"
import Countdown from './coundown';




const RenderClock = () => {
  const [startDate, setStartDate] = useState(new Date())
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

  const handleChange = (date) => {
    setStartDate(date)
  }

  const handleGenerate = () => {
    setFormCompleted(true)
  }

  const handleChangeDate = () => {
    setFormCompleted(false)
  }

  const clockRendered = 
    formCompleted 
    ? 
    <div>
      <Clock birthdayFormState={startDate} formCompleted={formCompleted} /> 
      {/* // ? <Countdown birthdayFormState={selectedDate}/>  */}
      <button onClick={handleChangeDate} style={{background: 'pink' }}>Change Date</button>

    </div>


    : <div>
        <div className="datepicker-container">
          <Datepicker 
              selected={startDate} 
              onChange={handleChange} 
              // onChange={date => setStartDate(date)} 
              showTimeSelect 
              showTimeInput
              timeFormat="HH:mm"
              timeIntervals={5}
              timeCaption="time"
              dateFormat="MM/dd/yyyy h:mm aa"
              calendarContainer={MyContainer}
              isClearable
              placeholderText="What's your birthday?"
              // showMonthYearPicker
              // showYearPicker
          />
      </div> 
      <button onClick={handleGenerate} style={{background: 'lightgreen' }}>Generate Countdown </button>
    </div>
    
  return clockRendered
}



const BirthdayForm = () => {
  return ( 
    <div>
      <RenderClock />
    </div>
  );
}
export default BirthdayForm