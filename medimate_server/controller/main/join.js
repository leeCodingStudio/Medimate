import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import * as userRepository from '../../data/main/user.js';
import { config } from '../../config.js';


    // req.body 데이터를 받아 회원가입 시키는 함수
    // 해당 아이디가 존재한다면 "409"를 리턴
    // userRepository에 데이터를 저장(비밀번호는 bcrypt를 사용하여 저장)

export async function join(req, res){

    const {U_ID, U_PW, U_NAME, U_EMAIL, U_ZIP_CODE, U_ADDRESS1, U_ADDRESS2, U_DATE_JOIN, U_ID_TYPE, U_HP } = req.body;

    const sign_id = await userRepository.findById(U_ID);
    if (sign_id) {
        return res.status(409).json({ message: `${U_ID}은 이미 가입되어있습니다`});
    }
    const hashed = await bcrypt.hash(U_PW, config.bcrypt.saltRounds);
    const userId = await userRepository.createUser({
        U_ID,
        U_PW: hashed,
        U_NAME,
        U_EMAIL,
        U_ZIP_CODE,
        U_ADDRESS1,
        U_ADDRESS2,
        U_DATE_JOIN,
        U_ID_TYPE,
        U_HP
    })
    const token = createJwtToken(userId);
    res.status(201).json({token, U_ID});
}
    
function createJwtToken(id){
    return jwt.sign({id}, config.jwt.secretKey, {expiresIn: config.jwt.expiresInSec});
}