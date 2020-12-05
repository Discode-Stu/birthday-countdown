import React, {useState, useEffect} from 'react';



const Clock = (props) => {
  // const [timeRemaining, setTimeRemaining] = useState(null)

  useEffect(() => {
    const birthday = props.birthdayFormState.toString();
    console.log('bithday',birthday);
    
  })
  return (
    <div>
      clock
    </div>
  )
}

export default Clock

