import express from 'express';
import * as Login from '../../controller/main/login.js'

const router = express.Router();


router.get('/',(req,res)=>{
    res.status(200).json({message:"로그인 페이지 이동"})
})
router.post('/',Login.login)

export default router