import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import fs from 'fs';
import crypto from 'crypto';

import { getPhonemes, reverse } from './utils/string';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

app.post('/api', (req: Request, res: Response) => {
  const {
    firstName,
    lastName,
  } = req.body;

  const fullName = [firstName, lastName].join(' ');
  const { consonants, vowels } = getPhonemes(fullName);

  const responseData = {
    vowels,
    consonants,
    fullName,
    reversedFullname: reverse(fullName),
    requestData: req.body,
  }

  const hash = crypto.createHash('sha256');
  hash.update(JSON.stringify(responseData));
  const fileName = `${hash.digest('hex')}.txt`;

  try {
    fs.writeFileSync(fileName, JSON.stringify(responseData), 'utf8');
    console.log('Data written to file successfully.');
  } catch (err) {
    console.error('An error occurred while writing to the file:', err);
  }

  res.json(responseData);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
