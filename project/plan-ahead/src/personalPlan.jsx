/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import PersonalPlanTable from "./personalPlanTable";

function PersonalPlan() {
  // Table font style
  const fontStyle = {
    color: "black",
    fontSize: "30px",
  };

  // Table CSS style
  const divStyle = {
    border: "2px solid teal",
    overflow: "auto",
    height: "300px",
  };

  // Air Table Data
  const [scheduleData, setScheduleData] = useState([]);
  const [scheduleID, setScheduleID] = useState("");

  //AirTable data for personal schedules
  const apiUrl = new URL(
    "https://api.airtable.com/v0/appq8DCLQI9VU4lCa/Personal%20Schedules?sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=asc"
  );

  const url =
    "https://api.airtable.com/v0/appq8DCLQI9VU4lCa/Personal%20Schedules";

  // fetches data every time page renders
  useEffect(() => {
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
    fetchSchedule();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(scheduleData);

  // Function to delete record
  async function deleteSchedule(id) {
    const response = await fetch(
      `https://api.airtable.com/v0/appq8DCLQI9VU4lCa/Personal%20Schedules/${id}`,
      {
        headers: {
          Authorization:
            "Bearer patC4edhed6aQeaB3.8ce40da4208998c565dcf55153392cc95e1b4d1cd9379f4d5f9e2a380b583425",
        },
        method: "DELETE",
      }
    );
    const jsonData = await response.json();
  }

  return (
    <>
      <h1 style={fontStyle}>Personal Schedule</h1>
      <div style={divStyle}>
        <PersonalPlanTable
          scheduleData={scheduleData}
          deleteSchedule={deleteSchedule}
        />
      </div>
    </>
  );
}

export default PersonalPlan;
