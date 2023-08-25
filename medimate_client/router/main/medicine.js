import express from 'express';
import * as medicine from '../../service/main/medicine.js';

const router = express.Router();

router.get('/', medicine.showAll);
router.get('/', medicine.searchDetail);

export default router;