import express from 'express'
import connectDB from './config/db_mongo.js'; 
import { ENV } from './config/env.js';
import cors from 'cors'

// ROUTES
import tweet from './routes/tweet.router.js'

// CONNEXION MONGO
connectDB(ENV.MONGO, ENV.DBNAME); 

// APP EXPRESS
const app = express();

// MIDDLEWARES
app.use(express.json())
app.use(cors())

// URLS API PREFIX
app.use("/api/tweet", tweet);

export default app;