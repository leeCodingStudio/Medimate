import express from 'express';
import * as DrugstoreController from '../../controller/main/pharm.js';
import { isAuth } from '../../middleware/token.js'

const app = express()
app.use(express.json())

const router = express.Router();

router.get('/',DrugstoreController.SearchDrugInfo);

export default router;