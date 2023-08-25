import express from 'express';
import { body } from 'express-validator';
import * as adminUserContoller from '../../controller/admin/user.js';
import { isAuth } from '../../middleware/token.js'

const router = express.Router();

router.get('/', isAuth,adminUserContoller.showAll);
router.get('/:id', adminUserContoller.showOne);
router.put('/:id', adminUserContoller.modify);
router.delete('/:id', adminUserContoller.drop);

export default router;