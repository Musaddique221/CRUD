import axios from "axios";

import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_SUCCESS,
} from "../constants/productConstants";

import { BASE_URL } from "../constants/baseUrl";

export const listProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(BASE_URL);
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const createProduct =
  (namee, vat, quantity, priceNet, priceGross) => async (dispatch) => {
    try {
      const { data } = await axios.post(BASE_URL, {
        namee,
        vat,
        quantity,
        priceNet,
        priceGross,
      });
      console.log("listproducts");

      dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: data });
    } catch (err) {
      dispatch({
        type: PRODUCT_CREATE_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };
