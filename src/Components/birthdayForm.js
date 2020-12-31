import React, { useState } from 'react';
import Datepicker, {CalendarContainer} from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import Clock from "./clock"




const RenderClock = () => {
  const [startDate, setStartDate] = useState(new Date())
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
    <div className='birthday-container'>
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
          <div>
            <a 
              className="submit-container"
              onClick={handleGenerate}>
                Generate Countdown 
            </a>
          </div>
        </div> }
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