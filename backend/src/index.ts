import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

import { getPhonemes, reverse } from './utils/string';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

app.post('/api', (req: Request, res: Response) => {
  console.log(req.body);
  const {
    firstName,
    lastName,
  } = req.body;

  const fullName = [firstName, lastName].join(' ');
  const { consonants, vowels } = getPhonemes(fullName);

  res.json({
    vowels,
    consonants,
    fullName,
    reversedFullname: reverse(fullName),
    requestData: req.body,
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
