import React, { Component, useState } from 'react';
import Datepicker, {CalendarContainer} from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

const BirthdayForm = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())

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

  return ( 
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
  );
}

export default BirthdayForm