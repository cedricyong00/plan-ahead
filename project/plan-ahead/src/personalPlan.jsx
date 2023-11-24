/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import PersonalPlanTable from "./personalPlanTable";

function PersonalPlan({scheduleData, setScheduleData}) {
  
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
          setScheduleData={setScheduleData}
          deleteSchedule={deleteSchedule}
        />
      </div>
    </>
  );
}

export default PersonalPlan;
