import express from "express";
import { downloadImage, uploadImage } from "../controller/image_controller.js";
import upload from "../util.js/uploads.js";

const router = express.Router();


// actaul logic se jo kaam krna hota hai use hm middleware(upload.single("file")) me krte hai
router.post('/upload', upload.single("file"), uploadImage);
router.get('/file/:fileId', downloadImage);

export default router;