import * as dotenv from 'dotenv';
import path from 'path';
import express from 'express';
import { json } from 'body-parser';
import mongoose from 'mongoose';

dotenv.config({ path: path.join(__dirname, '..', '.env') });

const app = express();

app.use(json());

const { DB_HOST, DB_COLLECTION, DB_USER, DB_PASS, PORT } = process.env;
mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}.njrgo.mongodb.net/${DB_COLLECTION}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
    app.listen(PORT, () => {
        console.log(`server running into http://localhost:${process.env.PORT}`);
    });
})
.catch(err => {
    throw err;
});
