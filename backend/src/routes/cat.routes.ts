import express from "express"
import { createCatController } from "../controller/cat.controller.js"
const router = express.Router()

router.post("/create" , createCatController)






// router.get("/search/all")



// router.get("/")
// router.get("/:id")
// router.post("/recommend")


export default router