import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import * as userRepository from '../../data/main/user.js';
import { config } from '../../config.js';


    // req.body 데이터를 받아 해당 아이디로 로그인 여부를 판단
    // 해당 아이디가 존재하지 않으면 "401"을 리턴
    // bcrypt를 이용하여 비밀번호까지 모두 맞다면 해당 정보를 JWT를 이용하여 사용자에게 json으로 전달

export async function login(req, res){
    const {U_ID, U_PW} =req.body;

    const user = await userRepository.findById(U_ID);
    
    if(!user){// 로그인이므로, user객체가 없으면 오류가 발생
        return res.status(401).json({message: '요청한 아이디가 존재하지 않습니다'});
    }
    const isValidpassword = await bcrypt.compare(U_PW, user.U_PW);
    if(!isValidpassword){
        return res.status(402).json({message: '아이디 또는 비밀번호를 확인하세요'});
    }
    const token = createJwtToken(user.U_NUM);
    res.status(200).json({token, U_ID});

}

function createJwtToken(id){
    return jwt.sign({id}, config.jwt.secretKey, {expiresIn: config.jwt.expiresInSec});
}
