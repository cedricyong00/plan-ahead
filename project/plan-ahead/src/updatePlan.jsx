/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

function UpdatePlan({ scheduleData, fetchSchedule }) {
  // To Duplicate Air Table Data
  const [copyData, setCopyData] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [remarks, setRemarks] = useState("");

  const TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN

  //Function to PATCH data
  async function updateScheduleRecord(recordId, updatedFields) {
    const apiUrl = `https://api.airtable.com/v0/appq8DCLQI9VU4lCa/Personal%20Schedules/${recordId}`;
      const response = await fetch(apiUrl, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({ fields: updatedFields }),
      });
      const jsonData = await response.json();
  }

  //Function to submit changes
  const handleUpdate = async (e) => {
    e.preventDefault();
    const recordId = copyData[0].id;
    const updatedFields = {
      Title: title,
      Date: date,
      Remarks: remarks,
    };
    updateScheduleRecord(recordId, updatedFields);
    await fetchSchedule();
    }

  useEffect(() => {
    setCopyData(scheduleData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scheduleData]);

  //Function to filter record after selecting
  async function filtering(e) {
    setCopyData(scheduleData);
    const dataTitle = e.target.value;
    setCopyData((copyData) =>
      copyData.filter((Data) => {
        return Data.fields.Title == dataTitle;
      })
    );
    }

    // Before updating page, it will wait for setCopyData
    useEffect(() => {
        if (copyData.length > 0) {
          console.log(copyData[0].fields.Title);
          setTitle(copyData[0].fields.Title);
          setDate(copyData[0].fields.Date);
          setRemarks(copyData[0].fields.Remarks);
        }
      }, [copyData]);

  return (
    <>
      <form>
        <label>Update Existing Plan</label>
        <br />
        <select
          className="Form"
          style={{ border: "2px solid teal" }}
          onChange={filtering}
        >
          {scheduleData.map((scheduleElement) => {
            return (
              <option key={scheduleElement.id}>
                {scheduleElement.fields.Title}
              </option>
            );
          })}
        </select>
        <br />
        <input
          className="Form"
          style={{ border: "2px solid teal" }}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          className="Form"
          style={{ border: "2px solid teal" }}
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <br />
        <input
          className="Form"
          style={{ border: "2px solid teal" }}
          type="text"
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
        />
        <br />
        <button
          className="submitButton"
          onClick={handleUpdate}
        >
          UPDATE
        </button>
      </form>
    </>
  );
}

export default UpdatePlan;
