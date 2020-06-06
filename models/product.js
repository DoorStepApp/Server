import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const productSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  productType: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    min: 0,
    required: true,
  },
});

const Product = model('Product', productSchema);

export default Product;
