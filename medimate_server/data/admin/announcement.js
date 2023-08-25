import { Announcement } from '../../db/announcement.js';
import { User } from '../../db/user.js';
import { sequelize } from '../../db/database.js';
import {Op} from 'sequelize';

// announcement table과 user table을 join하기 위한 객체
export const INCLUDE_USER = {
    attributes: [
        'A_NUM',
        'A_TITLE',
        'A_DATE',
        'A_CONTENT',
        'U_NUM',

        [sequelize.col('tb_user.U_NAME'), 'U_NAME']
    ],
    include: {
        // join할 테이블을 설정
        model: User,
        attributes: []
    },
}

// 생성
export async function insert(info){
    return Announcement.create(info)
    .then((data) => data.dataValues.U_NUM);
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

//이름같이 나오는게 왜 없나요....
export async function getByUName2(A_NUM){
    let limit = 10;
    return Announcement.findAndCountAll({
        ...INCLUDE_USER,
        limit,
        order: [
            ['A_NUM', 'DESC']
        ],
        where: { A_NUM: { [Op.like]: `%${A_NUM}%` } }
    });
}



// UNAME으로 찾기
export async function getByUName(A_TITLE, page){
    let limit = 10;
    let offset = (page - 1) * limit;
    return QNA.findAndCountAll({
        ...INCLUDE_USER,
        limit,
        offset,
        order: [
            ['A_NUM', 'DESC']
        ],
        where: { A_TITLE: { [Op.like]: `%${A_TITLE}%` } }
    });
}


// 공지사항번호로 찾기
export async function getByAnnounceNum(A_NUM){
    return Announcement.findByPk(A_NUM, INCLUDE_USER)
}

// 공지사항 제목으로 찾기
export async function getByTitle( A_TITLE, page){
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

// 수정
export async function update(A_NUM, td_announcement){
    return Announcement.findByPk(A_NUM,INCLUDE_USER)
    .then((oldAnnounce) => {
            oldAnnounce.A_TITLE = td_announcement.A_TITLE;
            oldAnnounce.A_CONTENT = td_announcement.A_CONTENT;
        return oldAnnounce.save();  
    });
}

// 삭제
export async function remove(A_NUM){
        return Announcement.findByPk(A_NUM).then((data)=>{data.destroy()})
    };