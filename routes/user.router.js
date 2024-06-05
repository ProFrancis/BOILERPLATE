import express from 'express'
import * as userController from '../controllers/user.controller.js'

const router = express.Router()

router.get('/', userController.get)
router.post("/add", userController.post)
router.put("/put", userController.put)
router.delete("/delete", userController.delet)

export default router

