import React , {useState} from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const Calender = () => {
  const [catDate, setCalDate] = useState(new Date());

  const onChangevalue = (e) => {
    setCalDate(e);
  };

  return (
    <div className="form-section">
        <div className='react-calender'>
        <h2>calender</h2>

      <Calendar onChange={onChangevalue} value={catDate} />
        </div>
    </div>
  );
};

export default Calender;
