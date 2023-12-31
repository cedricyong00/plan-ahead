/* eslint-disable react/prop-types */

import { useState } from "react";

/* eslint-disable no-unused-vars */
function CreatePlan({ scheduleData, setScheduleData, fetchSchedule }) {
  // State for relevant fields
  const [event, setEvent] = useState("");
  const [date, setDate] = useState("");
  const [remarks, setRemarks] = useState("");

  // Function to POST record
  async function updateSchedule(planData) {
    const response = await fetch(
      `https://api.airtable.com/v0/appq8DCLQI9VU4lCa/Personal%20Schedules`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer patC4edhed6aQeaB3.8ce40da4208998c565dcf55153392cc95e1b4d1cd9379f4d5f9e2a380b583425",
        },
        method: "POST",
        body: JSON.stringify({ fields: planData }),
      }
    );
    const jsonData = await response.json();
  }

  // Handle event change for event input
  const handleEventChange = (e) => {
    const Event = e.target.value;
    setEvent(Event);
  };

  // Handle event change for date input
  const handleDateChange = (e) => {
    const Date = e.target.value;
    setDate(Date);
  };

  // Handle event change for remarks input
  const handleRemarksChange = (e) => {
    const Remark = e.target.value;
    setRemarks(Remark);
  };

  async function addToTable(data) {
    await updateSchedule(data);
    fetchSchedule();
  }

  return (
    <>
      <form>
        <label>Add To Existing Plan</label>
        <br></br>
        <input
          className="Form"
          type="text"
          style={{ border: "2px solid teal" }}
          placeholder="Event"
          onChange={handleEventChange}
        ></input>
        <br></br>
        <input
          className="Form"
          type="Date"
          style={{ border: "2px solid teal" }}
          onChange={handleDateChange}
        ></input>
        <br></br>
        <input
          className="Form"
          type="text"
          style={{ border: "2px solid teal" }}
          placeholder="Remarks"
          onChange={handleRemarksChange}
        ></input>
        <br></br>
        <button
          className="submitButton"
          onClick={(e) => {
            e.preventDefault();
            addToTable({ Date: date, Remarks: remarks, Title: event });
          }}
        >
          ADD
        </button>
      </form>
    </>
  );
}

export default CreatePlan;
