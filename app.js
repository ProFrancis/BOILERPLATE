import express from 'express'
import connectDB from './db'; 
import { ENV } from './config/env.js';

// ROUTES
import user from './routes/user.router.js'
import article from './routes/article.router.js'

// CONNEXION MONGO
connectDB(ENV.MONGO); 

// APP EXPRESS
const app = express();

// MIDDLEWARES
app.use(express.json())

// URLS API PREFIX
app.use("/api/user", user);

export default app;