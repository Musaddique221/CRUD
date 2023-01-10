import Products from "../models/ProductModel.js";

const getProducts = async (req, res) => {
  try {
    const products = await Products.find({});
    res.json(products).status(200);
  } catch (err) {
    res.status(404).send({
      message: "product not found",
    });
  }
};
export default getProducts;
