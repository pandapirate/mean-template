import * as express from 'express';

import { Request, Response } from 'express';

const router = express.Router();

router.get('/api/:name',  (req: Request, res: Response) => {
  const name = req.params.name;
  const greeting = { greeting: `Hello, ${ name }` };
  return res.send(greeting);
});


router.post('/api/todo', (req, res) => {
  return res.send('new todo created');
});

export {router as todoRouter};
