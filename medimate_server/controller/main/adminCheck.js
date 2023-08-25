import * as userRepository from '../../data/main/user.js';

export async function getAdminCheck(req, res){
    const U_NUM = req.U_NUM;

    const adminCheck = U_NUM < 11 ? true : false
    console.log(adminCheck, U_NUM);
    res.status(200).json({adminCheck})
}