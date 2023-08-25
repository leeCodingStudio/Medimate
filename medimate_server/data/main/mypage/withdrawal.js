import { User } from "../../../db/user.js"


// id로 특정 사용자 정보를 가져와 삭제
export async function remove(U_NUM) {
    return User.findOne({where:{U_NUM}}).then((user) => {
        user.destroy();
});
}
