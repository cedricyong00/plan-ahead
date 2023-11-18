/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import HolidayTable from "./holidayTable";

function HolidayList() {
  const [holiday, setHoliday] = useState([]);

  //Holiday API
  const apiUrl = new URL("https://holidayapi.com/v1/holidays");
  apiUrl.search = new URLSearchParams({
    key: "abdcc0ed-7e2c-4dad-820a-cb4f94c5c1f6",
    country: "SG",
    year: 2022,
    public: true,
  });

  // Table CSS style
  const divStyle = {
    border: "2px solid teal",
    overflow: "auto",
    height: "300px",
  };

  // Talbe font style
  const fontStyle = {
    color: "black",
    fontSize: "30px",
  };

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
      <h1 style={fontStyle}>Upcoming Holidays</h1>
      <div style={divStyle}>
        <HolidayTable holiday={holiday} />
      </div>
    </>
  );
}

export default HolidayList;
