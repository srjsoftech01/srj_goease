import express from "express";
const router = express.Router();


router.get("/", (req, res) => {
    res.send("Contect API works!");
})


export default router;