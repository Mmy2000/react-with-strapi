import React from "react";
import {
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Skeleton,
} from "@chakra-ui/react";

const DashboardSkeleton = () => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Thead>
        <Tbody>
          {/* First Row Skeleton */}
          <Tr>
            <Td>
              <Skeleton height="20px" />
            </Td>
            <Td>
              <Skeleton height="20px" />
            </Td>
            <Td isNumeric>
              <Skeleton height="20px" />
            </Td>
          </Tr>
          {/* Second Row Skeleton */}
          <Tr>
            <Td>
              <Skeleton height="20px" />
            </Td>
            <Td>
              <Skeleton height="20px" />
            </Td>
            <Td isNumeric>
              <Skeleton height="20px" />
            </Td>
          </Tr>
          {/* Third Row Skeleton */}
          <Tr>
            <Td>
              <Skeleton height="20px" />
            </Td>
            <Td>
              <Skeleton height="20px" />
            </Td>
            <Td isNumeric>
              <Skeleton height="20px" />
            </Td>
          </Tr>
        </Tbody>
        
      </Table>
    </TableContainer>
  );
};

export default DashboardSkeleton;
