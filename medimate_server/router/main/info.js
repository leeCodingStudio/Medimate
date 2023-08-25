import express from 'express';
import * as INFO from '../../controller/main/mypage/info.js'
import {isAuth} from '../../middleware/token.js'


const router = express.Router();


// isAuth
router.get('/',isAuth,INFO.showUserInfo)
router.put('/',isAuth,INFO.updateUserInfo)



export default router;