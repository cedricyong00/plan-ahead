/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";

function PersonalPlan() {
  // Weather Data
  const [scheduleData, setScheduleData] = useState([]);

  //AirTable data for personal schedules
  const apiUrl = new URL(
    "https://api.airtable.com/v0/appq8DCLQI9VU4lCa/Personal%20Schedules?sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=asc"
  );
  apiUrl.search = new URLSearchParams({
    api_key: "patC4edhed6aQeaB3.8ce40da4208998c565dcf55153392cc95e1b4d1cd9379f4d5f9e2a380b583425",
    sort: [{ field: "Date", direction: "asc" }],
  });

  // fetches data every time page renders
  useEffect(() => {
    async function fetchSchedule() {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();
      setScheduleData(jsonData);
    }
    fetchSchedule();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(scheduleData);
  
  return <></>;
}

export default PersonalPlan;
