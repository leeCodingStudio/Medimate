import express from 'express';
import * as adminCheckController from '../../controller/main/adminCheck.js';
import { isAuth } from '../../middleware/token.js';

const router = express.Router();

router.get('/',isAuth,adminCheckController.getAdminCheck);

export default router;