import ProductHolding from '../models/productHolding.js';

const getAllProductHoldings = async (_req, res, next) => {
  try {
    const productHoldings = await ProductHolding.find();
    return res.status(200).json(productHoldings);
  } catch (err) {
    next(err);
  }
};

const createProductHolding = async (req, res, next) => {
  try {
    const newProductHolding = await ProductHolding.create(req.body);
    return res.status(201).send(newProductHolding);
  } catch (err) {
    next(err);
  }
};

const getProductHolding = async (req, res, next) => {
  try {
    const productHolding = await ProductHolding.findById(req.params.id);
    return res.status(200).send(productHolding);
  } catch (err) {
    next(err);
  }
};

const updateProductHolding = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const productHolding = await ProductHolding.findById(id);
    productHolding.set(body);
    const savedproductHolding = await productHolding.save();
    return res.status(200).json(savedproductHolding);
  } catch (err) {
    next(err);
  }
};

const deleteProductHolding = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deleteproductHolding = await ProductHolding.findByIdAndDelete(id);
    return res.status(200).send(deleteproductHolding);
  } catch (err) {
    next(err);
  }
};

export default {
  getAllProductHoldings,
  createProductHolding,
  getProductHolding,
  updateProductHolding,
  deleteProductHolding,
};
