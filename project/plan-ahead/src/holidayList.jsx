import { useState, useEffect } from "react";

function HolidayList () {

    const [holiday, setHoliday] = useState([]);

    //Month for data filtering
    let month = 1;

    //Holiday API
    const apiUrl = new URL("https://holidayapi.com/v1/holidays")
      apiUrl.search = new URLSearchParams({
        key: "2a4d8a45-d7bc-4753-9748-a86b7841984e",
        country: "SG",
        year: 2022,
        month: month
      })
  
      useEffect(() => {
        async function fetchHoliday() {
          const response = await fetch(apiUrl);
          const jsonData = await response.json();
          setHoliday(jsonData);
        }
        fetchHoliday();
      }, []);

    return (
        <>
        <h1>Holidays! Celebrate!</h1>
        </>
    )
}

export default HolidayList