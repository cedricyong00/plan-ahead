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

function WeatherTable({weatherData}) {
    return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Forecast (24h)</Th>
            <Th>Max(Deg)</Th>
            <Th>Min(Deg)</Th>
            <Th>Avg(Deg)</Th>
          </Tr>
        </Thead>
        <Tbody>
          {weatherData.map((weatherElement) => {

            // Retrieve Date
            const day = new Date(weatherElement.date);
            const date = day.getDate();

            return (
              <Tr key={weatherElement.date_epoch}>
                <Td> {date}</Td>
                <Td><img src={weatherElement.day.condition.icon} alt="png" /></Td>
                <Td>{weatherElement.day.maxtemp_c}</Td>
                <Td>{weatherElement.day.mintemp_c}</Td>
                <Td>{weatherElement.day.avgtemp_c}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
    )
}

export default WeatherTable