/* eslint-disable no-unused-vars */
import "./App.css";
import HolidayList from "./holidayList";
import Weather from "./weather";
import PersonalPlan from "./personalPlan";
import { useState, useEffect } from "react";
import CreatePlan from "./createPlan";
import UpdatePlan from "./updatePlan";

const navFontStyle = {
  fontSize: "5px",
  display: "flex",
};

function App() {
  // Air Table Data
  const [scheduleData, setScheduleData] = useState([]);

  //AirTable data for personal schedules
  const apiUrl = new URL(
    "https://api.airtable.com/v0/appq8DCLQI9VU4lCa/Personal%20Schedules?sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=asc"
  );

  // fetches data every time page renders
  async function fetchSchedule() {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization:
          "Bearer patC4edhed6aQeaB3.8ce40da4208998c565dcf55153392cc95e1b4d1cd9379f4d5f9e2a380b583425",
      },
      method: "GET",
    });
    const jsonData = await response.json();
    setScheduleData(jsonData.records);
  }
  useEffect(() => {
    fetchSchedule();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* <nav style={navFontStyle}>
        <h1 className="NavHeader">Home</h1>
        <h1 className="NavHeader">Add Plans</h1>
        <h1 className="NavHeader">Update Plans</h1>
      </nav> */}
      {/* <PersonalPlan scheduleData={scheduleData} setScheduleData={setScheduleData} />
      <HolidayList />
      <Weather />
      <CreatePlan scheduleData={scheduleData} setScheduleData={setScheduleData} fetchSchedule={fetchSchedule}/> */}
      <UpdatePlan scheduleData={scheduleData} fetchSchedule={fetchSchedule}/>
    </>
  );
}

export default App;
