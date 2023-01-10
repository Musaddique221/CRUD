import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  namee: {
    type: String,
    required: true,
  },
  vat: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  priceNet: {
    type: Number,
    required: true,
  },
  priceGross: {
    type: Number,
    required: true,
  },
});


const Products = mongoose.model("Products", productSchema)

export default Products