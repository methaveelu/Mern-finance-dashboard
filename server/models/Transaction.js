import mongoose from "mongoose";

const Schema = mongoose.Schema;

const transactionSchema = new Schema(
  {
    buyer: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      get: (v) => v / 100,
    },
    productIds: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Product",
        },
    ],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;