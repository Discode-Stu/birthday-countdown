import React, {useState, useEffect} from 'react';

const getTimeRemaining = (birthday) => {

  var bday = new Date(birthday)
  let today = new Date()
  var distance = bday.getTime() - today.getTime()
  console.log('distance', distance)

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return {
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  }
}





const Clock = (props) => {
  const [timeRemaining, setTimeRemaining] = useState(null)

  useEffect(() => {
    const birthday = props.birthdayFormState.toString();
    console.log('bithday',birthday);
    setTimeRemaining(getTimeRemaining(birthday))
  }, [props.birthdayFormState])


  const data = getTimeRemaining(props.birthdayFormState.toString())
  
  return (
    <div>
      <div>DAYS {data.days}</div>
      <div>HOURS {data.hours}</div>
      <div>MINUTES {data.minutes}</div>
      <div>SECONDS {data.seconds}</div>
    </div>
  )
}

export default Clock

