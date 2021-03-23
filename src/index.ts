import * as dotenv from 'dotenv';
import path from 'path';
import express from 'express';
import { json } from 'body-parser';

dotenv.config({ path: path.join(__dirname, '..', '.env') });

const app = express();

app.use(json());

app.listen(3000, () => {
    console.log(`server running into http://localhost:${process.env.PORT}`);
});
