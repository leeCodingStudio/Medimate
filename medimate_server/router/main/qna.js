import express from 'express';
import * as QNA from '../../controller/main/mypage/qna.js'
import {isAuth} from '../../middleware/token.js'


const router = express.Router();




router.get('/',isAuth,QNA.SearchQnaOne)
router.post('/',isAuth,QNA.MakeQna)

export default router;