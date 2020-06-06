import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const sellerSchema = Schema({
  _id: Schema.Types.ObjectId,
  sellerName: {
    type: String,
    required: true,
  },
  shopName: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  location: {
    lat: String,
    long: String,
  },
  products: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      quantity: {
        type: Number,
        min: 1,
        required: true,
      },
    },
  ],
});

const Seller = model('Seller', sellerSchema);

export default Seller;
