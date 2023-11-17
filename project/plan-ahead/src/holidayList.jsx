import { useState, useEffect } from "react";

function HolidayList () {

    const [holiday, setHoliday] = useState([]);

    //Holiday API
    const apiUrl = new URL("https://holidayapi.com/v1/holidays")
      apiUrl.search = new URLSearchParams({
        key: "2a4d8a45-d7bc-4753-9748-a86b7841984e",
        country: "SG",
        year: 2022,
      });

      // fetches data every time page renders
      useEffect(() => {
        async function fetchHoliday() {
          const response = await fetch(apiUrl);
          const jsonData = await response.json();
          setHoliday(jsonData.holidays);
        }
        fetchHoliday();
      }, []);

    return (
        <>
        <h1>Upcoming Schedule</h1>
        <table>
        <tbody>
          {holiday.map((holidayElement) => {
            {/* To convert date string into names of the month and day */}
            {/* Month */}
            const date = new Date(holidayElement.observed);
            const month = date.getMonth();
            const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
          
            // Date
            const day = date.getDate();
            return (
              <tr key={holidayElement.uuid} className="TableOfDates">
                <td> {holidayElement.name}</td>
                <td>{(monthNames[month])} {(day)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
        </>
    )
}

export default HolidayList