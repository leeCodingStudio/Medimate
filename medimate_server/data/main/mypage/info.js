import { User } from "../../../db/user.js"

export async function getUser(U_NUM){
    return User.findByPk(U_NUM);
}

// 회원정보 수정
export async function updateUser(U_NUM,NEW_DATA){
    return User.findOne({where:{U_NUM}}).then((data) => {
        data.U_EMAIL = NEW_DATA.U_EMAIL;
        data.U_ZIP_CODE = NEW_DATA.U_ZIP_CODE;
        data.U_ADDRESS1 = NEW_DATA.U_ADDRESS1;
        data.U_ADDRESS2 = NEW_DATA.U_ADDRESS2;
        data.U_HP = NEW_DATA.U_HP;
        return data.save();
    });
}