import Products from "../models/ProductModel.js";

const createProduct = async (req, res) => {
  try {
    const product = new Products({
      namee: req.body.namee,
      vat: req.body.vat,
      quantity: req.body.quantity,
      priceNet: req.body.priceNet,
      priceGross: req.body.priceGross,
    });
    const createdProduct = await product.save();
    res.status(200).json(createdProduct);
  } catch (err) {
    res.status(500).send({
      message: "something went wrong when creating product",
    });
  }
};

export default createProduct;
