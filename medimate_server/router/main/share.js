import express from 'express';
import * as shareContoller from '../../controller/main/mypage/share.js';
import {isAuth} from '../../middleware/token.js';

const router = express.Router();

router.get('/', isAuth, shareContoller.showAll);
router.post('/search', isAuth, shareContoller.showById);
router.post('/', isAuth, shareContoller.create);
router.delete('/:id', isAuth, shareContoller.drop);

export default router;