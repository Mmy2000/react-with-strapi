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
  Flex
  
} from "@chakra-ui/react";

import DashboardSkeleton from "./DashboardSceleton";
import { useDeleteDashboardProductMutation, useGetDashboardDataQuery, useUpdateDashboardProductMutation } from "../app/services/apiSlice";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { formatPrice } from "../utils/functions";
import CustomeAlertDailog from "../shared/AlertDailog";
import { useEffect, useState } from "react";
import CustomModal from "../shared/Modal";
import { title } from "framer-motion/client";



const DashboardProducts = () => {
  const [productId, setProductId] = useState(null);
  const [productToEdit, setProductToEdit] = useState(null);
  const [thumbnail, setImage] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen:isModalOpen, onOpen:onModalOpen, onClose:onModalClose } = useDisclosure();
  const { isOpen:isAddModalOpen, onOpen:onAddModalOpen, onClose:onAddModalClose } = useDisclosure();
  const { isLoading, data, error } = useGetDashboardDataQuery({ page: 1 });
  const [destroyProduct , {isLoading:isDestroying , isSuccess}] = useDeleteDashboardProductMutation()
  const [updateProduct , {isLoading:isUpdating , isSuccess:isUpdateSuccess}] = useUpdateDashboardProductMutation()

  const onChangeHandler = e => {
    const {name,value} = e.target
    setProductToEdit({
      ...productToEdit,
      [name]:value
    })
    
  }

  const onChangePriceHandler = value =>{
    setProductToEdit({
      ...productToEdit,
      price:+value
    })
  }
  const onChangeStockHandler = value =>{
    setProductToEdit({
      ...productToEdit,
      stock:+value
    })
  }

  const onChangeImageHandler = (e) =>{
    setImage(e.target.files[0]);

  }

  const onSubmitHandler = ()=>{
    console.log(productToEdit);
    
    const formData = new FormData()
    formData.append(
      "data",
      JSON.stringify({
        title: productToEdit.title,
        description: productToEdit.description,
        price: productToEdit.price,
        stock: productToEdit.stock,
      })
    );
      formData.append("files.thumbnail",thumbnail);
      updateProduct({id:productId,body:formData})
    
  }
  

  useEffect(() => {
    if (isSuccess) {
      setProductId(null)
      onClose()
    }
    if (isUpdateSuccess) {
      setProductId(null)
      onModalClose()
    }
  }, [isSuccess,isUpdateSuccess]);

  if (isLoading) {
    return <DashboardSkeleton />;
  }
  return (
    <>
      <Flex direction={"column"} my={6} mx={"auto"} maxW={"85%"}>
        <Button
          colorScheme="green"
          w={"fit-content"}
          ml={"auto"}
          mb={2}
          onClick={() => onAddModalOpen()}
          variant={"solid"}
          mr={3}
        >
          Add Product
        </Button>
        <TableContainer>
          <Table variant="simple">
            <TableCaption>
              Total Entries : {data?.data.length ?? 0}
            </TableCaption>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Thumbnail</Th>
                <Th>Price</Th>
                <Th>Stock</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.data?.map((product) => (
                <Tr key={product.id}>
                  <Td>{product.id}</Td>
                  <Td>{product?.attributes.title}</Td>
                  <Td>
                    {
                      product?.attributes?.categories?.data[0]?.attributes
                        ?.title
                    }
                  </Td>
                  <Td>
                    <Image
                      borderRadius="full"
                      objectFit={"cover"}
                      boxSize="40px"
                      src={`${import.meta.env.VITE_SERVER_URL}${
                        product?.attributes?.thumbnail?.data?.attributes
                          ?.formats?.thumbnail?.url
                      }`}
                    />
                  </Td>
                  <Td>${formatPrice(product.attributes.price)}</Td>
                  <Td>{product.attributes.stock}</Td>
                  <Td>
                    <Button
                      as={Link}
                      to={`/products/${product.id}`}
                      colorScheme="purple"
                      variant={"solid"}
                      mr={3}
                    >
                      <AiOutlineEye size={17} />
                    </Button>

                    <Button
                      mr={3}
                      onClick={() => {
                        setProductId(product.id);
                        setProductToEdit(product.attributes);
                        onModalOpen();
                      }}
                      colorScheme="blue"
                      variant={"solid"}
                    >
                      <FiEdit2 />
                    </Button>
                    <Button
                      onClick={() => {
                        setProductId(product.id);
                        onOpen();
                      }}
                      colorScheme="red"
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
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Thumbnail</Th>
                <Th>Price</Th>
                <Th>Stock</Th>
                <Th>Action</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Flex>

      <CustomeAlertDailog
        onOkHandler={() => destroyProduct(productId)}
        isLoading={isDestroying}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        title={"Are you sure"}
        description={
          "Do you really wont to destroy this product? this action cannot be undone."
        }
        okText="Destroy"
      />
      <CustomModal
        title={`Update Product`}
        isOpen={isModalOpen}
        onClose={onModalClose}
        onOkClick={onSubmitHandler}
        isLoading={isUpdating}
      >
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input
            placeholder="Product Title"
            value={productToEdit?.title}
            onChange={onChangeHandler}
            name="title"
          />
        </FormControl>
        <FormControl>
          <FormLabel mt={3}>Description</FormLabel>
          <Textarea
            size="sm"
            placeholder="Product Description"
            value={productToEdit?.description}
            onChange={onChangeHandler}
            name="description"
          />
        </FormControl>
        <FormControl>
          <FormLabel mt={3}>Price</FormLabel>
          <NumberInput
            name="price"
            defaultValue={productToEdit?.price}
            onChange={onChangePriceHandler}
            precision={2}
            step={0.2}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel mt={3}>Count in Stock</FormLabel>
          <NumberInput
            name="stock"
            onChange={onChangeStockHandler}
            defaultValue={productToEdit?.stock}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel mt={3}>Product Image</FormLabel>
          <Input
            id="productImage"
            h={"full"}
            p={2}
            accept="image/png,image/jpeg,image/gif"
            type="file"
            onChange={onChangeImageHandler}
          ></Input>
        </FormControl>
      </CustomModal>
      <CustomModal
        title={`Add New Product`}
        isOpen={isAddModalOpen}
        onClose={onAddModalClose}
        okTxt="Create"
      >
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input
            placeholder="Product Title"
            name="title"
          />
        </FormControl>
        <FormControl>
          <FormLabel mt={3}>Description</FormLabel>
          <Textarea
            size="sm"
            placeholder="Product Description"
            name="description"
          />
        </FormControl>
        <FormControl>
          <FormLabel mt={3}>Price</FormLabel>
          <NumberInput
            name="price"
            defaultValue={20}
            precision={2}
            step={0.2}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel mt={3}>Count in Stock</FormLabel>
          <NumberInput
            name="stock"
            defaultValue={1}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel mt={3}>Product Image</FormLabel>
          <Input
            id="productImage"
            h={"full"}
            p={2}
            accept="image/png,image/jpeg,image/gif"
            type="file"
          ></Input>
        </FormControl>
      </CustomModal>
    </>
  );
};

export default DashboardProducts;
