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
  HStack,
  Box,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";

const DashboardSkeleton = () => {
  return (
    <Box w="full" p={4}>
      <TableContainer w="full">
        <Table variant="simple" w="full">
          <Thead>
            <Tr>
              <Th>
                <Skeleton height="20px" width="80px" />
              </Th>
              <Th>
                <Skeleton height="20px" width="80px" />
              </Th>
              <Th isNumeric>
                <Skeleton height="20px" width="100px" />
              </Th>
              <Th>
                <Skeleton height="20px" width="80px" />
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {/* Repeat this structure for multiple rows */}
            {[...Array(5)].map((_, index) => (
              <Tr key={index}>
                <Td>
                  <Skeleton height="20px" />
                </Td>
                <Td>
                  <Skeleton height="20px" />
                </Td>
                <Td isNumeric>
                  <Skeleton height="20px" />
                </Td>
                <Td>
                  <HStack justifyContent="flex-end">
                    <Skeleton
                      startColor="yellow.100"
                      endColor="yellow.400"
                      height="20px"
                      width="60px"
                    />
                    <Skeleton
                      startColor="red.100"
                      endColor="red.400"
                      height="20px"
                      width="60px"
                    />
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>
                <Skeleton height="20px" width="80px" />
              </Th>
              <Th>
                <Skeleton height="20px" width="80px" />
              </Th>
              <Th isNumeric>
                <Skeleton height="20px" width="100px" />
              </Th>
              <Th>
                <Skeleton height="20px" width="80px" />
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DashboardSkeleton;
