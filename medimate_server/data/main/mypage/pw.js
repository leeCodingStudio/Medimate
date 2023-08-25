import { User } from "../../../db/user.js"


export async function findAll(){
    return User.findAll()
}

// 비밀번호 변경
export async function changePW(U_NUM,NEW_PW){
    return User.findOne({where:{U_NUM}}).then((data) => {
        data.U_PW = NEW_PW;
        return data.save();
    });
}

export async function beforePW(U_NUM){
    return User.findOne({where:{U_NUM}}).then((data)=> data.U_PW)}


