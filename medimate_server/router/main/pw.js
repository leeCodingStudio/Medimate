import express from 'express';
import * as PW from '../../controller/main/mypage/pw.js'
import {isAuth} from '../../middleware/token.js'


const router = express.Router();




router.get('/',isAuth,PW.getByUNum)
router.put('/',isAuth,PW.changePassword)



export default router;