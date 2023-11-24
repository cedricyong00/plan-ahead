/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

function PersonalPlanTable({ scheduleData, deleteSchedule, setScheduleData }) {
  //Array of days in a week
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  function fetchID(id) {
    deleteSchedule(id);
    setScheduleData((scheduleData) =>
      scheduleData.filter((Data) => {
        return Data.id !== id;
      })
    );
  }

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Event</Th>
            <Th>Date</Th>
            <Th>Day</Th>
            <Th>Remarks</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          {scheduleData.map((scheduleElement) => {
            // Retrieve Day
            const date = new Date(scheduleElement.fields.Date);
            const day = date.getDay();

            return (
              <Tr key={scheduleElement.id}>
                <Td>{scheduleElement.fields.Title}</Td>
                <Td> {scheduleElement.fields.Date}</Td>
                <Td>{days[day]}</Td>
                <Td>{scheduleElement.fields.Remarks}</Td>
                <Td>
                  <button onClick={() => fetchID(scheduleElement.id)}>
                    DELETE
                  </button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default PersonalPlanTable;
