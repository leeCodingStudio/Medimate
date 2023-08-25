import express from 'express';
import * as joinService from '../../service/main/join.js';

const router = express.Router();

router.get('/', joinService.Show);
router.post('/',joinService.Join)

export default router;