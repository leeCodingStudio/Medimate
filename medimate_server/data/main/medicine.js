import { Op } from "sequelize"
import { Medicine } from "../../db/medicine.js"

//Pagnation
export async function getAll(page) {
    let limit = 8;
    let offset = (page - 1) * limit;
    return Medicine.findAndCountAll({
        limit,
        offset,
        order: [
            ['M_NUM', 'DESC']
        ],
        where: { M_NUM: { [Op.like]: `%${M_NUM}%` } }
    });
}

export async function getByUName(Total, page) {
        let limit = 8;
        let offset = (page - 1) * limit;
        return Medicine.findAndCountAll({
            limit,
            offset,
            order: [
                ['M_NUM', 'DESC']
            ],
            where: {
            M_NUM: { [Op.like]: `%${Total.M_NUM}%` },
            M_NAME: { [Op.like]: `%${Total.M_NAME}%` },
            M_CORP: { [Op.like]: `%${Total.M_CORP}%` },
            M_TYPE: { [Op.like]: `%${Total.M_TYPE}%` },
            M_MARK_FRONT: { [Op.like]: `%${Total.M_MARK}%` },
            M_MARK_BACK: { [Op.like]: `%${Total.M_MARK}%` },
            M_COLOR_FRONT: { [Op.like]: `%${Total.M_COLOR}%` },
            M_COLOR_BACK: { [Op.like]: `%${Total.M_COLOR}%` },
            M_CHARACTER: { [Op.like]: `%${Total.M_CHARACTER}%` },
        }
    });
}


export async function findByName(mName) {
    return Medicine.findOne({ where: { mName } })
}

export async function findByNum(mNum) {
    return Medicine.findByPk(mNum)
}

export async function create(medicine) {
    return Medicine.create(medicine).then((data) => data.dataValues)
}





