import { Announcement } from '../../db/announcement.js';
import { User } from '../../db/user.js';
import { INCLUDE_USER } from '../admin/announcement.js';
import {Op} from 'sequelize';

// 부분 출력
export async function getByNum(A_NUM){
    return Announcement.findOne({
        ...INCLUDE_USER,
        where: { A_NUM }
    });
}

// 제목으로 찾기 출력
export async function getByTitle(A_TITLE, page){
    let limit = 10;
    let offset = (page - 1) * limit;
    return Announcement.findAndCountAll({
        ...INCLUDE_USER, 
        limit,
        offset,
        order: [
            ['A_NUM', 'DESC']
        ],
        where: { A_TITLE: { [Op.like]: `%${A_TITLE}%` } }
    });
}

// 전체 출력 (페이지네이션 기능 추가)
export async function getAll(page){
    let limit = 10;
    let offset = (page - 1) * limit;
    return Announcement.findAndCountAll({
        ...INCLUDE_USER, 
        limit,
        offset,
        order: [
            ['A_NUM', 'DESC']
        ]
    });
}
    
// UNAME으로 찾기
export async function getByUName(A_TITLE, page){
    let limit = 10;
    let offset = (page - 1) * limit;
    return Announcement.findAndCountAll({
        ...INCLUDE_USER,
        limit,
        offset,
        order: [
            ['A_NUM', 'DESC']
        ],
        where: { A_TITLE: { [Op.like]: `%${A_TITLE}%` } }
    })
}

// UNUM으로 찾기
export async function getByUNum(U_NUM){
    return Announcement.findAll({
        ...INCLUDE_USER, 
    include: {
        ...INCLUDE_USER.include,
        where: { U_NUM }
    }
});
}
