import mongoose from "mongoose";

const Schema = mongoose.Schema;


const ProductSchema = new Schema(
  {
    price: {
      type: Number,
      get: (v) => v / 100,
    },
    expense: {
      type: Number,
      get: (v) => v / 100,
    },
    transactions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Transaction",
        },
    ],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;

//transactions data is an array of objects. Each object in the array represents a reference to a Transaction document in the database, identified by its MongoDB ObjectID.