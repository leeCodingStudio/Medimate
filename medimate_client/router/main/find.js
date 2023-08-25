import express from 'express';
import * as findService from '../../service/main/find.js';

const router = express.Router();

router.get('/', findService.showAll);
router.post('/id', findService.findId);
router.post('/pw', findService.findPw);

export default router;