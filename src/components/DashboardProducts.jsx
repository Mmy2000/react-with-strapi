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
} from "@chakra-ui/react";
import DashboardSkeleton from "./DashboardSceleton";
import { useGetDashboardDataQuery } from "../app/services/apiSlice";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { formatPrice } from "../utils/functions";
import CustomeAlertDailog from "../shared/AlertDailog";



const DashboardProducts = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isLoading, data, error } = useGetDashboardDataQuery({ page: 1 });
  console.log(data);

  if (isLoading) {
    return <DashboardSkeleton />;
  }
  return (
    <>
      <TableContainer>
        <Table variant="simple">
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
                  {product?.attributes?.categories?.data[0]?.attributes?.title}
                </Td>
                <Td>
                  <Image
                    borderRadius="full"
                    objectFit={"cover"}
                    boxSize="40px"
                    src={`${import.meta.env.VITE_SERVER_URL}${
                      product?.attributes?.thumbnail?.data?.attributes?.formats
                        ?.thumbnail?.url
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
                    onClick={() =>
                      console.log(`update ${product.attributes.title}`)
                    }
                    colorScheme="blue"
                    variant={"solid"}
                  >
                    <FiEdit2 />
                  </Button>
                  <Button
                    onClick={
                      onOpen
                    }
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
      <CustomeAlertDailog isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
    </>
  );
};

export default DashboardProducts;
