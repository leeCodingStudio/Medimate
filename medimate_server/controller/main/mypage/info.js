import * as userRepository from '../../../data/main/mypage/info.js';
import { config } from '../../../config.js';

export async function showUserInfo(req, res){
    const U_NUM = req.U_NUM;

    const user = await userRepository.getUser(U_NUM);
    res.status(200).json(user)
}

// ------------------회원정보 수정-----------------------
export async function updateUserInfo(req, res){
    const {U_EMAIL, U_ZIP_CODE, U_ADDRESS1, U_ADDRESS2, U_HP } = req.body;

    const userId = await userRepository.updateUser(req.U_NUM,{
        U_EMAIL,
        U_ZIP_CODE,
        U_ADDRESS1,
        U_ADDRESS2,
        U_HP
    })
    res.status(201).json({userId});
}