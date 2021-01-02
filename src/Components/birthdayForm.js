import React, { useState } from 'react';
import Datepicker, {CalendarContainer} from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import Clock from "./clock"




const RenderClock = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [formCompleted, setFormCompleted] = useState(false)

  const MyContainer = ({ className, children }) => {
    return (
      <div style={{ padding: "4px", background: "#A3ABB2", color: "#444" }}>
        <CalendarContainer className={className}>
          <div style={{ background: "#444444" }}>
          </div>
          <div style={{ position: "relative" }}>{children}</div>
        </CalendarContainer>
      </div>
    );
  };

  const handleChange = (date) => {
    setStartDate(date)
  }

  const handleGenerate = (e) => {
    e.preventDefault()
    setFormCompleted(true)
  }

  const handleChangeDate = () => {
    setFormCompleted(false)
  }

  const clockRendered = 
    <form onSubmit={handleGenerate} className='birthday-container'>
      {formCompleted
      ? 
        <div className='clock-container'>
          <Clock birthdayFormState={startDate} formCompleted={formCompleted} /> 
          <a className='change-date' onClick={handleChangeDate} >Change Date</a>
        </div>
      : 
        <div className="datepicker-container">
          <Datepicker 
              className="datepicker"
              selected={startDate} 
              onChange={handleChange} 
              // onChange={date => setStartDate(date)} 
              // showTimeSelect 
              // showTimeInput
              // timeFormat="HH:mm"
              // timeIntervals={5}
              // timeCaption="time"
              // dateFormat="MM/dd/yyyy h:mm aa"
              calendarContainer={MyContainer}
              // isClearable
              placeholderText="Enter birthday"
              // showMonthYearPicker
              // showYearPicker
          />
          <div className="submit-container">
            <input 
              // className="submit-container"
              type='submit'
              value='Generate Countdown'
            />
          </div>
        </div> }
    </form>

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