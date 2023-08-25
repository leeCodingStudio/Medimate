import { Share } from '../../../db/share.js';
import { User } from '../../../db/user.js';

export async function getByUId(U_ID){
    return User.findOne({ where:{ U_ID } });
}

export async function getBySenderNum(S_SENDER_NUM){
    return Share.findAll({ where: { S_SENDER_NUM } });
}

export async function getByReciverNum(S_RECIVER_NUM){
    return Share.findAll({ where: { S_RECIVER_NUM } });
}

export async function getBySNum(S_NUM){
    return Share.findByPk(S_NUM);
}

export async function insert(share){
    return Share.create(share).then((data) => data.dataValues.S_NUM);
}

export async function remove(S_NUM){
    return Share.findByPk(S_NUM).then((share) => {
        share.destroy();
    });
}