import { Drugstore } from '../../db/drugstore.js';
import {Op} from 'sequelize';

// 약국정보로 찾기 출력
export async function getByDrugInfo(total, page){
    let limit = 8;
    let offset = (page - 1) * limit;
    return Drugstore.findAndCountAll({
        limit,
        offset,
        order: [
            ['P_NUM', 'DESC']
        ],
        where: {
        P_ADDRESS: {[Op.like]: `%${total.P_ADDRESS}%`},
        P_NAME: {[Op.like]: `%${total.P_NAME}%`}}})
}

// 전체 출력 (페이지네이션 기능 추가)
export async function getAll(page){
    let limit = 8;
    let offset = (page - 1) * limit;
    return Drugstore.findAndCountAll({
        limit,
        offset,
        order: [
            ['P_NUM', 'DESC']
        ],
        where: { P_ADDRESS: { [Op.like]: `%${P_ADDRESS}%` } }
    });
}