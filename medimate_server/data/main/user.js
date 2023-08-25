import { User } from "../../db/user.js"



// User 객체를 받아 새로운 사용자 정보를 생성
export async function join(user) {
    return User.create(user).then((data) => data.dataValues.num);
}

export async function createUser(user) {
    return User.create(user).then((data) => data.dataValues.U_NUM);
}

export async function findById(U_ID) {
    return User.findOne({where: {U_ID}});
}

export async function update(user){
    return User.findByPk(user.U_NUM).then((userOri) => {
        userOri.U_ID = user.U_ID;
        userOri.U_PW = user.U_PW;
        userOri.U_NAME = user.U_NAME;
        userOri.U_EMAIL = user.U_EMAIL;
        userOri.U_ZIP_CODE = user.U_ZIP_CODE;
        userOri.U_ADDRESS1 = user.U_ADDRESS1;
        userOri.U_ADDRESS2 = user.U_ADDRESS2;
        userOri.U_DATE_JOIN = user.U_DATE_JOIN;
        userOri.U_ID_TYPE = user.U_ID_TYPE;
        userOri.U_HP = user.U_HP;
        return userOri.save();
    });
}

// id로 특정 사용자 정보를 가져와 삭제
export async function remove(U_NUM) {
    return User.findOne(U_NUM).then((user) => {
        user.destroy();
});
}

