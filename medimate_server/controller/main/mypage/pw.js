import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import * as userRepository from '../../../data/main/mypage/pw.js';
import { config } from '../../../config.js';

export async function getByUNum(req,res){
    await userRepository.findAll()
}


// 비밀번호 변경----------------------------------------------
export async function changePassword(req, res){
    const { OLD_PW ,U_PW } = req.body;

    const compare = await userRepository.beforePW(req.U_NUM)
    const validPassword = await bcrypt.compare(OLD_PW,compare)

    if(validPassword){
    const hashed = await bcrypt.hash(U_PW, config.bcrypt.saltRounds);
    const userId = await userRepository.changePW(req.U_NUM,hashed)
    res.status(201).json({success:`비밀번호 변경이 완료되었습니다.`});
}else{
    res.status(408).json({message:`이전 비밀번호가 일치하지 않습니다.`})
}

}


function createJwtToken(id){
    return jwt.sign({id}, config.jwt.secretKey, {expiresIn: config.jwt.expiresInSec});
}