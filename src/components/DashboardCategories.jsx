import React, { useEffect, useState } from "react";
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
import { useDeleteDashboardCategoryMutation, useGetDashboardCategoryDataQuery } from "../app/services/apiSlice";
import DashboardSkeleton from "./DashboardSceleton";
import CustomeAlertDailog from "../shared/AlertDailog";

const DashboardCategories = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [categorytId, setCategoryId] = useState(null);
  const { isLoading, data, error } = useGetDashboardCategoryDataQuery();
    const [destroyCategory, { isLoading: isDestroying, isSuccess }] =
      useDeleteDashboardCategoryMutation();

    
      useEffect(() => {
        if (isSuccess) {
            setCategoryId(null)
            onClose()
        }
      }, [isSuccess]);


  if (isLoading) {
    return <DashboardSkeleton />;
  }

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
            {data?.data?.map((category) => (
              <Tr key={category.id}>
                <Td>{category?.id}</Td>
                <Td>{category?.attributes?.title}</Td>
                <Td>
                  <Button mr={3} colorScheme="blue" variant={"solid"}>
                    <FiEdit2 />
                  </Button>
                  <Button
                    colorScheme="red"
                    onClick={() => {
                      setCategoryId(category.id);
                      onOpen();
                    }}
                    variant={"solid"}
                  >
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
      <CustomeAlertDailog
        onOkHandler={() => destroyCategory(categorytId)}
        isLoading={isDestroying}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        title={"Are you sure"}
        description={
          "Do you really wont to destroy this category? this action cannot be undone."
        }
        okText="Destroy"
      />
    </>
  );
};

export default DashboardCategories;
