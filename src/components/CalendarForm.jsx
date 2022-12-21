import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import Datepicker from "react-tailwindcss-datepicker";
import "../css_files/calendar.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  CalendarPicker,
  DesktopDatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import dayjs from "dayjs";

function CalendarForm() {
  const [date, setDate] = useState(new Date());
  const [value, setValue] = useState(new Date());
  const [valueMUI, setValueMUI] = useState(new Date());
  const [valueMUI2, setValueMUI2] = useState(dayjs());
  return (
    <div>
      {/* Reference: https://blog.logrocket.com/react-calendar-tutorial-build-customize-calendar/ */}
      {/* A simple React library */}
      <div name="calendarType1">
        <h1 className="text-center text-4xl">Calendar type 1</h1>
        <div className="calendar-container flex justify-center">
          <Calendar
            onChange={setDate}
            value={date}
            minDetail="year"
            next2Label={null}
            prev2Label={null}
            showNeighboringMonth={false}
            formatShortWeekday={(locale, date) =>
              date.toString().substring(0, 1)
            }
          />
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
      {/* ------------------------------------------- */}
      {/* Reference for Google API: https://fusebit.io/blog/google-calendar-react/?utm_source=www.google.com&utm_medium=referral&utm_campaign=none */}
    </div>
  );
}

export default CalendarForm;
