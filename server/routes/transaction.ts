import * as express from 'express';

import { Request, Response } from 'express';

import { Transaction } from '../models/transaction';

const router = express.Router();

router.get('/api/todo/:name', (req: Request, res: Response) => {
  const name = req.params.name;
  const greeting = { greeting: `Hello, ${ name }` };
  return res.send(greeting);
});

router.get('/api/transactions',  async (req: Request, res: Response) => {
  const trans = await Transaction.find({});
  console.log(trans);
  return res.status(200).send(trans);
});

router.post('/api/transaction', async (req: Request, res: Response) => {
  const trans = Transaction.build({
    type: "Income",
    description: "Tempus",
    amount: 3200,
    eventDate: new Date("2021-07-31")
  });
  await trans.save();
  return res.status(201).send(trans);
});

export {router as transactionRouter};
