import { Op } from "sequelize"
import { QNA } from '../../db/qna.js';
import { User } from '../../db/user.js';
import sequelize from "sequelize";


const INCLUDE_USER = {
    attributes: [
        'Q_NUM',
        'Q_TITLE',
        'Q_CONTENT',
        'Q_ANSWER',
        'createdAt',
        'updatedAt',
        [sequelize.col('tb_user.U_NAME'),'U_NAME']
    ],
    include: {
        model: User,
        attributes: []
    }
}

export async function getAll(page) {
    let limit = 10;
    let offset = (page - 1) * limit;
    return QNA.findAndCountAll({
        ...INCLUDE_USER,
        limit,
        offset,
        order: [
            ['Q_NUM', 'DESC']
        ]
    });
}

export async function getByUName(Q_TITLE, page) {
    let limit = 10;
    let offset = (page - 1) * limit;
    return QNA.findAndCountAll({
        ...INCLUDE_USER,
        limit,
        offset,
        order: [
            ['Q_NUM', 'DESC']
        ],
        where: { Q_TITLE: { [Op.like]: `%${Q_TITLE}%` } }
    });
}

export async function findByNum(Q_NUM) {
    return QNA.findOne({ where: { Q_NUM } })
}

export async function findByName(U_NUM) {
    const UserNum = findByNum(U_NUM)
    return QNA.findOne({ where: { UserNum } })
}

export async function create(qna) {
    return QNA.create(qna).then((data) => data.dataValues.Q_NUM)
}

export async function update(Q_NUM, Q_CONTENT,Q_ANSWER) {
    return QNA.findOne({ where: { Q_NUM } })
        .then((data) => {
            data.Q_CONTENT = Q_CONTENT
            data.Q_ANSWER = Q_ANSWER
            return data.save()
        })
}



