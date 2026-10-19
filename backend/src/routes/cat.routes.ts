import express from "express"
import { createCatController , getAllCatsController , getSingleCatController, recommendCatsController, searchCatsController } from "../controller/cat.controller.js"
const router = express.Router()

router.post("/create" , createCatController)
router.get("/search/all", searchCatsController)
router.get("/", getAllCatsController)
router.get("/:id" , getSingleCatController)
router.post("/recommend" , recommendCatsController)


export default router