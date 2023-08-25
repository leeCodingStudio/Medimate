import express from "express";
import * as findController from '../../controller/main/find.js';

const router = express.Router();

router.post('/id', findController.findId);
router.post('/pw', findController.findPw);


export default router;