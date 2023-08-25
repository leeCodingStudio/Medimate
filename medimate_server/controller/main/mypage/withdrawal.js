import jwt from 'jsonwebtoken';
import * as userRepository from '../../../data/main/mypage/withdrawal.js';
import { config } from '../../../config.js';


export async function getByUNum(U_NUM){
    return User.findByPk(U_NUM);
}


//회원 탈퇴----------------------------------------------------
export async function deleteUser(req, res){
    const userId = await userRepository.remove(req.U_NUM)
    res.status(201).json({message: `그동안 감사했습니다.`});
    deleteJwtToken(req.U_NUM);
}






// 탈퇴
function deleteJwtToken(id) {
    // invalidatedTokens 배열에서 해당 id를 가진 토큰을 제거합니다.
    const invalidatedTokens = []
    return invalidatedTokens.filter(token => token.id !== id);
}