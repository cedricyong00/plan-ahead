/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import PersonalPlanTable from "./personalPlanTable";

function PersonalPlan({scheduleData, setScheduleData}) {
  
  // Table font style
  const fontStyle = {
    color: "black",
    fontSize: "15px",
    padding: "20px"
  };

  // Table CSS style
  const divStyle = {
    border: "2px solid teal",
    overflow: "auto",
    height: "240px",
  };

  const TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN

  // Function to delete record
  async function deleteSchedule(id) {
    const response = await fetch(
      `https://api.airtable.com/v0/appq8DCLQI9VU4lCa/Personal%20Schedules/${id}`,
      {
        headers: {
          Authorization:
            `Bearer ${TOKEN}`,
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
          setScheduleData={setScheduleData}
          deleteSchedule={deleteSchedule}
        />
      </div>
    </>
  );
}

export default PersonalPlan;
