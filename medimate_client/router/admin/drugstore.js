import express from 'express';
import * as adminDrugstore from '../../service/admin/drugstore.js';

const router = express.Router();

router.get('/', adminDrugstore.showAll);
router.post('/', adminDrugstore.create);
router.post('/update', adminDrugstore.modify);
router.get('/remove/:id', adminDrugstore.drop);


export default router;