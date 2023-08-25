import express from 'express';
import * as indexService from '../../service/main/index.js';

const router = express.Router();

router.get('/', indexService.showAll);

export default router;