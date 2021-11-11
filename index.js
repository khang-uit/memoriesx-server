import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();


const PORT = process.env.PORT || 3000;


app.use(cors());


app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));


app.use('/posts', postRoutes);

app.get('/', (req, res) => {
    res.send('Hello');
});

//MongoDb

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
