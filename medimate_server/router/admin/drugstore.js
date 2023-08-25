import express from 'express';
import * as DrugstoreController from '../../controller/admin/drugstore.js';
// import { isAuth } from '../../middleware/token.js'

const router = express.Router();


router.post('/', DrugstoreController.createDrugstore);

router.get('/:id', DrugstoreController.searchDrugNum);

router.get('/:id', DrugstoreController.searchDrugName);

router.get('/', DrugstoreController.getAllDrugstore);

router.put('/:id', DrugstoreController.updateDrugstore);

router.delete('/:id', DrugstoreController.deleteDrugstore);

export default router;