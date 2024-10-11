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
import {
  useDeleteDashboardCategoryMutation,
  useGetDashboardCategoryDataQuery,
  useUpdateDashboardCategoryMutation,
} from "../app/services/apiSlice";
import DashboardSkeleton from "./DashboardSceleton";
import CustomeAlertDailog from "../shared/AlertDailog";
import CustomModal from "../shared/Modal";
import { body, title } from "framer-motion/client";

const DashboardCategories = () => {
  const [categoryToEdit, setCategoryToEdit] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();
  const [categorytId, setCategoryId] = useState(null);
  const { isLoading, data, error } = useGetDashboardCategoryDataQuery();
  const [destroyCategory, { isLoading: isDestroying, isSuccess }] =
    useDeleteDashboardCategoryMutation();

  const [updateCategory, { isLoading: isUpdating, isSuccess:isUpadeSuccess }] =
    useUpdateDashboardCategoryMutation();
    
  
  console.log(categoryToEdit);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setCategoryToEdit({
      ...categoryToEdit,
      [name]: value,
    });
  };

  const onSubmitHandler = ()=>{
    const formData = new FormData()
    formData.append('data', JSON.stringify({
      title:categoryToEdit?.title
    }));
    updateCategory({id:categorytId,body:formData})
  }

  useEffect(() => {
    if (isSuccess) {
      setCategoryId(null);
      onClose();
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
                  <Button
                    mr={3}
                    colorScheme="blue"
                    variant={"solid"}
                    onClick={() => {
                      setCategoryId(category.id);
                      setCategoryToEdit(category?.attributes);
                      onModalOpen();
                    }}
                  >
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
      <CustomModal
        title={"Update Category"}
        isOpen={isModalOpen}
        onClose={onModalClose}
        onOkClick={onSubmitHandler}
        isLoading={isUpdating}
      >
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input
            placeholder="Category Title"
            value={categoryToEdit?.title}
            onChange={onChangeHandler}
            name="title"
          />
        </FormControl>
      </CustomModal>
    </>
  );
};

export default DashboardCategories;
