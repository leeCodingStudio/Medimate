import { User } from '../../db/user.js';

const INCLUDE_USER = {
    attributes: [
        'U_NUM',
        'U_ID',
        'U_NAME',
        'U_EMAIL',
        'U_HP'
    ]
}

export async function getId(U_NAME, U_EMAIL){
    return User.findOne({
        ...INCLUDE_USER,
        where: { U_NAME, U_EMAIL} });
}

export async function getPw(U_ID, U_PW){
    return User.findOne({
        where: { U_ID } })
            .then((temp_user) => {
            temp_user.U_PW = U_PW;
            return temp_user.save();
    });
}

export async function getUser(U_ID, U_NAME, U_EMAIL){
    return User.findOne({
        ...INCLUDE_USER,
        where: { U_ID, U_NAME, U_EMAIL } });
}