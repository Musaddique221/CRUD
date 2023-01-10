import React, { useEffect } from "react";
import { useState } from "react";
import { Select, useDisclosure } from "@chakra-ui/react";

import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spacer,
  Icon,
} from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";

import { createProduct, listProducts } from "../actions/productAction";
import { AiOutlinePlus } from "react-icons/ai";

const PopupScreen = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  const dispatch = useDispatch();

  const [namee, setnamee] = useState("");
  const [vat, setVat] = useState("");
  const [quantity, setQuantity] = useState("");
  const [priceNet, setNetPrice] = useState("");
  const [priceGross, setGrossPrice] = useState("");

  // useEffect(() => {
  //   submitHandler();
  // }, []);

  const submitHandler = () => {
    dispatch(createProduct(namee, vat, quantity, priceNet, priceGross));
    window.location.reload();
  };

  return (
    <>
      <Button p="7" w="10" onClick={onOpen}>
        <Icon as={AiOutlinePlus} />
        Add
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <form bgColor="red">
              <Heading as="h1" mb="8" fontSize="3xl" fontWeight="bold">
                Products
              </Heading>
              <FormControl id="product-namee">
                <FormLabel htmlFor="product-namee">
                  Product name
                  <Input
                    id="product-namee"
                    type="text"
                    onChange={(e) => setnamee(e.target.value)}
                  />
                </FormLabel>
              </FormControl>

              <FormControl id="vat">
                <FormLabel htmlFor="vat">
                  <Select
                    onChange={(e) => setVat(e.target.value)}
                    id="vat"
                    type="number"
                  >
                    <option>VAT</option>
                    <option value={5}>5%</option>
                    <option value={10}>10%</option>
                    <option value={15}>15%</option>
                  </Select>
                </FormLabel>
              </FormControl>

              <FormControl id="quantity">
                <FormLabel htmlFor="quantity">
                  Quantity
                  <Input
                    onChange={(e) => setQuantity(e.target.value)}
                    id="quantity"
                    type="number"
                  />
                </FormLabel>
              </FormControl>

              <FormControl id="gross-price">
                <FormLabel htmlFor="gross-price">
                  Price (gross)
                  <Input
                    onChange={(e) => {
                      setGrossPrice(e.target.value);
                      if (e.target.value && vat) {
                        const net =
                          parseInt(e.target.value) -
                          (parseInt(vat) / 100) * e.target.value;

                        setNetPrice(net);
                      }
                    }}
                    id="gross-price"
                    type="number"
                  />
                </FormLabel>
              </FormControl>

              <FormControl id="net-price">
                <FormLabel htmlFor="net-price">
                  Price (net)
                  <Input value={priceNet} id="net-price" type="number" />
                </FormLabel>
              </FormControl>

              <Spacer h="3" />

              <ModalFooter>
                <Button mr={3} colorScheme="blue" onClick={submitHandler}>
                  Save
                </Button>
                <Button variant="ghost" bgColor="gray.200"  mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PopupScreen;
