import express from 'express';
import * as WITHDRAWAL from '../../controller/main/mypage/withdrawal.js'
import {isAuth} from '../../middleware/token.js'


const router = express.Router();




router.get('/',isAuth,(req,res)=>{
    res.status(200).json({message:`회원탈퇴 페이지 이동`})
})
router.delete('/',isAuth,WITHDRAWAL.deleteUser)

export default router;