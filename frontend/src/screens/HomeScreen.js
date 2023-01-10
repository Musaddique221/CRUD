import {
  Flex,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Icon,
} from "@chakra-ui/react";

import PopupScreen from "./PopupScreen";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiEdit } from "react-icons/ci";

import { listProducts } from "../actions/productAction";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { products } = productList;

  const productCreate = useSelector((state)=>state.productCreate)
  const {product} = productList

  useEffect(() => {
    dispatch(listProducts());
  },[product]);

  return (
    <Flex direction="row" justifyContent="flex-start">
      <Flex direction="column">
        <Heading as="h1" fontSize="40px" fontWeight="bold" mt="50" ml="20">
          Products
        </Heading>{" "}
        <Flex direction="row" justifyContent="flex-start" ml="20" p="2" w="12">
          <PopupScreen />
        </Flex>
        <TableContainer ml="20" mt="7">
          <Table variant="striped" size="md">
            <Thead>
              <Tr>
                <Th>Products name</Th>
                <Th>Price per Qty (Gross)</Th>
                <Th>VAT</Th>
                <Th>Price per Qty (net)</Th>
                <Th>Quantity</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {products &&
                products.map((products) => (
                  <Tr key={products._id}>
                    <Td>{products.namee}</Td>
                    <Td>{products.priceGross}</Td>
                    <Td>{products.vat}%</Td>
                    <Td>{products.priceNet}</Td>
                    <Td>{products.quantity}</Td>
                    <Td>
                      <Icon as={CiEdit} />
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Flex>
  );
};
export default HomeScreen;
