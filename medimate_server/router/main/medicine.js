import express from 'express'
import * as a from '../../controller/main/medicine.js'

const router = express.Router()


router.get('/',a.SearchMedicineAll)
router.get('/:id',a.SearchMedicineOne)


export default router; 