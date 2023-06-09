import React, { useState } from "react";

const DatePicker = ({ onDateChange }) => {
  const [day, setDay] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);

  const handleDayChange = (selectedDay) => {
    setDay(parseInt(selectedDay));
    updateSelectedDate(parseInt(selectedDay), month, year);
  };

  const handleMonthChange = (selectedMonth) => {
    setMonth(parseInt(selectedMonth));
    updateSelectedDate(day, parseInt(selectedMonth), year);
  };

  const handleYearChange = (selectedYear) => {
    setYear(parseInt(selectedYear));
    updateSelectedDate(day, month, parseInt(selectedYear));
  };

  const updateSelectedDate = (day, month, year) => {
    const formattedDate = `${year}-${month}-${day}`;
    onDateChange(formattedDate);
  };

  const getMaxDaysInMonth = (month, year) => {
    if (month === 2) {
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return 29;
      } else {
        return 28;
      }
    } else if ([4, 6, 9, 11].includes(month)) {
      return 30;
    } else {
      return 31;
    }
  };

  const generateDayOptions = () => {
    const maxDays = getMaxDaysInMonth(month, year);
    return Array.from({ length: maxDays }, (_, i) => i + 1).map((dayOption) => (
      <option key={dayOption} value={dayOption}>
        {dayOption}
      </option>
    ));
  };

  return (
    <div className="flex justify-center mb-5">
      <select
        className="w-1/4 py-2 px-4 border border-gray-300 rounded-l"
        value={day || ""}
        onChange={(e) => handleDayChange(e.target.value)}
      >
        <option value="">Day</option>
        {generateDayOptions()}
      </select>

      <select
        className="w-1/4 py-2 px-4 border border-gray-300"
        value={month || ""}
        onChange={(e) => handleMonthChange(e.target.value)}
      >
        <option value="">Month</option>
        {[
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ].map((monthOption, index) => (
          <option key={index} value={index + 1}>
            {monthOption}
          </option>
        ))}
      </select>

      <select
        className="w-1/4 py-2 px-4 border border-gray-300 rounded-r"
        value={year || ""}
        onChange={(e) => handleYearChange(e.target.value)}
      >
        <option value="">Year</option>
        {Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i).map(
          (yearOption) => (
            <option key={yearOption} value={yearOption}>
              {yearOption}
            </option>
          )
        )}
      </select>
    </div>
  );
};

export default DatePicker;
