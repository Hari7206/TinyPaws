import express from "express"
const router = express.Router()
import { aiRecommendController } from "../controller/aiRecommend.controller.js"
router.post('/recommendByAi' , aiRecommendController);

export default router