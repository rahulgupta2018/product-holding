import mongoose from 'mongoose';

const ProductHoldingSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  description: String,
  Brand: String,
  Weight: Number,
  Material: { type: String, required: true },
  Color: String,
});

const ProductHolding = mongoose.model('ProductHolding', ProductHoldingSchema);

export default ProductHolding;
