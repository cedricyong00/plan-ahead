/* eslint-disable no-unused-vars */
import "./App.css";
import HolidayList from "./holidayList";
import Weather from "./weather";
import PersonalPlan from "./personalPlan";
import { useState, useEffect } from "react";
import CreatePlan from "./createPlan";
import UpdatePlan from "./updatePlan";
import { Route, Routes } from "react-router-dom";

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

  const TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN

  // fetches data every time page renders
  async function fetchSchedule() {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization:
          `Bearer ${TOKEN}`,
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
      <nav style={navFontStyle}>
        <a href="/" className="NavHeader">
          Home
        </a>
        <a href="/Add" className="NavHeader">
          Add Plans
        </a>
        <a href="/Update" className="NavHeader">
          Update Plans
        </a>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <PersonalPlan
                scheduleData={scheduleData}
                setScheduleData={setScheduleData}
              />
              <HolidayList />
              <Weather />
            </>
          }
        />

        <Route
          path="/Add"
          element={
            <CreatePlan
              scheduleData={scheduleData}
              setScheduleData={setScheduleData}
              fetchSchedule={fetchSchedule}
            />
          }
        />

        <Route
          path="/Update"
          element={
            <UpdatePlan
              scheduleData={scheduleData}
              fetchSchedule={fetchSchedule}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
