import express from 'express';
import productController from '../controllers/productController.js';

const Router = express.Router();

Router.route('/productHolding')
  .get(productController.getAllProductHoldings)
  .post(productController.createProductHolding);

Router.route('/productHolding/:id')
  .get(productController.getProductHolding)
  .put(productController.updateProductHolding)
  .delete(productController.deleteProductHolding);

export default Router;