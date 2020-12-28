import React, {useState, useEffect} from 'react';

const getTimeRemaining = (birthday) => {
  var bday = new Date(birthday);
  var today = new Date();

  const currentMonth = today.getMonth();
  const birthMonth = bday.getMonth();

  if(birthMonth > currentMonth) {
    //1. month is after the current month
    bday.setFullYear(today.getFullYear())
  }
  else if (birthMonth < currentMonth) {
    //2. month is before the current month
    const lesserMonth = today.getFullYear() + 1
    console.log('lesserMonth', lesserMonth);
    
    bday.setFullYear(lesserMonth)
  }
  else if (birthMonth === currentMonth) {
    const birthDay = bday.getDate()
    const currentDay = today.getDate()

    if(birthDay > currentDay) {
      //1. month is after the current day
      bday.setFullYear(today.getFullYear())
    }
    else if (birthDay < currentDay) {
      //2. month is before the current day
      const lesserDay = today.getFullYear() + 1
      console.log('lesserday', lesserDay);
      
      bday.setFullYear(lesserDay)
    }
    else if (birthDay === currentDay) {
      return 0
    }
  }


  var distance = bday.getTime() - today.getTime();
  // var distance = today.getTime() - bday.getTime() ;
  // console.log('distance', distance)

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return {
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  }
}


const Clock = (props) => {
  const birthday = props.birthdayFormState.toString();

  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(birthday));

  const getAge = (birthday) => {
    var bday = new Date(birthday);
    let today = new Date();
    var distance = today.getTime() - bday.getTime();
    var daysOld = Math.floor(distance / (1000 * 60 * 60 * 24));
    var yearsOld = Number((daysOld/365).toFixed(0));
    return yearsOld;
  }

  // const [timer, setTimer] = useState(0)

  useEffect(() => {
    // const birthday = props.birthdayFormState.toString();
    console.log('propsssss',props)
    const timer = setInterval(() => {
      // console.log('timerrrrr');
      
      const timeRemaining = getTimeRemaining(birthday);
      setTimeRemaining(timeRemaining);
    }, 1000);


    props.formCompleted ? console.log('form complete!!!') : console.log('interval canceled!!!')
    // props.formCompleted ? console.log('form complete!!!') : clearInterval(timer)
    // if(props.formCompleted == false){
    //   clearInterval(timer)
    // }
    return () => clearInterval(timer);
  }, []);
  // }, [birthday, props.formCompleted]);

  console.log('timeRemaining',timeRemaining);
  
  console.log('birthdayyyy', props.birthdayFormState);

  // useEffect(() => {
    
  //   return () => {
  //     console.log("cleaned up");
  //   };
  // }, []);

  //mon Dec 07 2020 13:59:17 GMT-0500
  return (
    <div>
      {
        timeRemaining == 0 ?
          <h1>Happy Birthday!!!</h1>
        :
        <div>
          <div>
            <div>DAYS {timeRemaining.days}</div>
            <div>HOURS {timeRemaining.hours}</div>
            <div>MINUTES {timeRemaining.minutes}</div>
            <div>SECONDS {timeRemaining.seconds}</div>
          </div>
          <div>
            {<h4>remaining until you are {(getAge(birthday))}</h4>}
          </div>
        </div>
      }
    </div>
  )
}

export default Clock;

