import React from 'react'
import {
  TableContainer,
  Image,
  Table,
  TableCaption,
  Thead,
  Th,
  Tbody,
  Tr,
  Tfoot,
  Td,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
  Select,
  Textarea,
  Box,
  Flex,
} from "@chakra-ui/react";
import { BsTrash } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { useGetDashboardCategoryDataQuery } from '../app/services/apiSlice';

const DashboardCategories = () => {
     const { isLoading, data, error } = useGetDashboardCategoryDataQuery();
     console.log(data.data);
     
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Total Entries : {data?.data.length ?? 0}</TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Category</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.data.map((category) => (
              <Tr>
                <Td>{category?.id}</Td>
                <Td>{category.attributes.title}</Td>
                <Td>
                  <Button mr={3} colorScheme="blue" variant={"solid"}>
                    <FiEdit2 />
                  </Button>
                  <Button colorScheme="red" variant={"solid"}>
                    <BsTrash size={17} />
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>ID</Th>
              <Th>Category</Th>
              <Th>Action</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
}

export default DashboardCategories