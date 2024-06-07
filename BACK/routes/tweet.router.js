import express from 'express';
import * as TweetController from '../controllers/tweet.controller.js';

const router = express.Router()

router.get("/", TweetController.get)
router.post("/post", TweetController.post)

export default router;