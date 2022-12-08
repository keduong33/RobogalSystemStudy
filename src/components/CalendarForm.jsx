import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Datepicker from "react-tailwindcss-datepicker";
import "../css_files/calendar.css";

function CalendarForm() {
  const [date, setDate] = useState(new Date());
  const [value, setValue] = useState(new Date());
  return (
    <div>
      {/* Reference: https://blog.logrocket.com/react-calendar-tutorial-build-customize-calendar/ */}
      <div name="calendarType1">
        <h1 className="text-center text-4xl">Calendar type 1</h1>
        <div className="calendar-container flex justify-center">
          <Calendar onChange={setDate} value={date} minDetail="year" />
        </div>
        <div>
          <p className="text-center">
            <span className="font-bold">Selected Date: </span>
            {date.toDateString()}
          </p>
        </div>
        {/* <div className="justify-center flex">
          <button className="btn btn-blue flex font-bold">
            Choose time &gt;
          </button>
        </div> */}
      </div>

      {/* ---------------------------------------- */}
      {/* Reference: https://reactjsexample.com/a-modern-date-range-picker-component-for-react-using-tailwind-3-and-dayjs/ 
      Apparently this one uses Tailwind 3 and dayjs in it --> Support Typescript*/}
      <div>
        <h1 className="text-center text-4xl">Calendar type 2</h1>
        <div className="flex justify-center">
          <Datepicker value={value} onChange={setValue} showShortcuts={true} />
        </div>
      </div>
    </div>
  );
}

export default CalendarForm;
