/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

function HolidayTable({ holiday }) {
  // To convert date string into names of the month and day
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Event</Th>
            <Th>Month</Th>
            <Th isNumeric>Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {holiday.map((holidayElement) => {
            {
              /* Month */
            }
            const date = new Date(holidayElement.observed);
            const month = date.getMonth();

            // Date
            const day = date.getDate();

            return (
              <Tr key={holidayElement.uuid}>
                <Td> {holidayElement.name}</Td>
                <Td>{monthNames[month]}</Td>
                <Td>{day}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default HolidayTable;
