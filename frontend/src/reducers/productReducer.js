import { listProducts } from "../actions/productAction";
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_SUCCESS,
} from "../constants/productConstants";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_SUCCESS:
      return { products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};

export const productCreateReducer = (state = { product: [] }, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_SUCCESS:
      return { product: action.payload };
    case PRODUCT_CREATE_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
