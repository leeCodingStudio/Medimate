import { Op } from 'sequelize';
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

export async function getAll(page){
    let limit = 10;
    let offset = (page - 1) * limit;
    return User.findAndCountAll({
        ...INCLUDE_USER,
        limit,
        offset,
        order: [
            ['U_NUM', 'DESC']
        ]
    });
}

export async function getByUName(U_NAME, page){
    let limit = 10;
    let offset = (page - 1) * limit;
    return User.findAndCountAll({
        ...INCLUDE_USER,
        limit,
        offset,
        order: [
            ['U_NUM', 'DESC']
        ],
        where: { U_NAME: { [Op.like]: `%${U_NAME}%` } }
    });
}

export async function getByUNum(U_NUM){
    return User.findByPk(U_NUM, INCLUDE_USER);
}

export async function insert(user){
    return User.create(user).then((data) => data.dataValues.U_NUM);
}

export async function update(user){
    return User.findByPk(user.U_NUM).then((temp_user) => {
        temp_user.U_ID = user.U_ID;
        temp_user.U_NAME = user.U_NAME;
        temp_user.U_EMAIL = user.U_EMAIL;
        temp_user.U_HP = user.U_HP;
        return temp_user.save();
    });
}

export async function remove(U_NUM){
    return User.findByPk(U_NUM).then((user) => {
        user.destroy();
    });
}