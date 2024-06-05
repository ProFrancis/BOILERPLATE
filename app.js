import express from 'express'

// ROUTES
import user from './routes/user.router.js'
import article from './routes/article.router.js'

// APP EXPRESS
const app = express();

// MIDDLEWARES
app.use(express.json())

// URLS API PREFIX
app.use("/api/user", user);

export default app;