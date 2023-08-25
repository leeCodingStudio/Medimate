import express from 'express';
import * as Join from '../../controller/main/join.js'


const router = express.Router();



router.get('/',(req,res)=>{
    res.status(200).json({message:"회원가입 페이지 이동"})
})

router.post('/',Join.join)

export default router;