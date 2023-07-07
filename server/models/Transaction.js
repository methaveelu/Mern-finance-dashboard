import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);



const transactionSchema = new Schema(
  {
    buyer: {
      type: String,
      required: true,
    },
    amount: {
      type: mongoose.Types.Currency,
      currency: "USD",
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