import express from 'express';
import * as drugService from '../../service/admin/medicine.js';
import { upload } from '../../middleware/image.js';

const router = express.Router();

router.get('/', drugService.showAll);
router.post('/', upload.single("M_IMAGE"), drugService.insertDrug);
router.post('/update', upload.single("M_IMAGE"), drugService.updateDrug);
router.get('/remove/:id', drugService.deleteDrug);

export default router;