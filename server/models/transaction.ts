import * as mongoose from 'mongoose';

interface TransactionDoc extends mongoose.Document {
  type: string;
  description: string;
  amount: number;
  eventDate: Date;
}

interface ITransaction {
  type: string;
  description: string;
  amount: number;
  eventDate: Date;
}

interface transactionModelInterface extends mongoose.Model<TransactionDoc>{
  build(attr: ITransaction): TransactionDoc
};

const transactionSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  amount: {
    type: Number,
    required: true
  },
  eventDate: {
    type: Date,
    required: true
  }
});

transactionSchema.statics.build = (attr: ITransaction) => {
  return new Transaction(attr);
};

const Transaction = mongoose.model<any, transactionModelInterface>('Transaction', transactionSchema, 'transaction');

export { Transaction };
