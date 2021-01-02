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

  const noBirthYear = new Date(birthday).getFullYear() === new Date().getFullYear()


  const getAge = (birthday) => {
    var bday = new Date(birthday);
    var bdayMonth = bday.getMonth()
    var bdayDay = bday.getDate()

    let today = new Date();
    let todayDay = today.getDate()
    let todayMonth = today.getMonth()

    var distance = today.getTime() - bday.getTime();
    var daysOld = Math.floor(distance / (1000 * 60 * 60 * 24));
    var yearsOld = Number((daysOld/365).toFixed(0));

    if (((bdayMonth > 5) && (bdayMonth !== todayMonth)) || ((bdayMonth === todayMonth) && (bdayDay < todayDay))) {
      return yearsOld + 1
    } else {
      return yearsOld;
    }
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

  const renderMessage = () => {

    console.log('noBirthYear', noBirthYear);
    
    if(noBirthYear) {
      return (
        <h4>until your birthday!</h4>
      )
    } else {
      return (
        <h4>remaining until you are {(getAge(birthday))}</h4>
      )
    }

  }

  return (
    <div>
      {
        timeRemaining === 0 ?
          <div className='countdown'>
            <div className='message-container'>
              <p className="message-container__title">Countdown Complete</p>
              <p className="message-container__message">HAPPY BIRTHDAY!!</p>
            </div>
          </div>

        :
        <div>
          <div className='countdown'>
            <ul className='countdown__clock'>
              <li>DAYS <p>{timeRemaining.days}</p></li>
              <li>HOURS <p>{timeRemaining.hours}</p></li>
              <li>MINUTES <p>{timeRemaining.minutes}</p></li>
              <li>SECONDS <p>{timeRemaining.seconds}</p></li>
            </ul>
          </div>
          <div className='until-container'>
            {renderMessage()}
          </div>
        </div>
      }
    </div>
  )
}

export default Clock;

