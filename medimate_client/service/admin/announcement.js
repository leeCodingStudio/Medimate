
import { config } from '../../config.js';
import Pagination from '../../middleware/pagination.js';
import * as TokenStorage from '../../token.js'

/* 전체 조회*/
export async function showAll(req, res) {
    const page = req.query.page || 1
    const A_TITLE = req.query.A_TITLE;
    const url =A_TITLE
    ? `${config.base}/admin/announcement?page=${page}&A_TITLE=${A_TITLE}`
    : `${config.base}/admin/announcement?page=${page}`;

    fetch(url, {headers: getHeaders()})
        .then(response => response.json())
        .then(AnnouncementList => {
            if(AnnouncementList.message){
                const message = AnnouncementList.message
                res.render('../public/ejs/admin/adminAnnouncement',{ message })
            }else{
            let pagination = Pagination(page, AnnouncementList.count, 10);
            pagination.list = AnnouncementList.rows;
            pagination.A_TITLE = A_TITLE;
            res.render('../public/ejs/admin/adminAnnouncement', pagination);
            }
        });
}

/* 상세보기(html이동이라 새로 만듬) */
export async function showOne(req, res) {
    const A_NUM = req.params.id;
    const url = `${config.base}/admin/announcement/${A_NUM}`

    fetch(url, {headers: getHeaders()})
        .then(response => response.json())
        .then(announcement => {
            if(announcement.message){
                const message = announcement.message
                res.render('../public/ejs/admin/adminAncmEdit',{ message })
            }else{
            res.render('../public/ejs/admin/adminAncmEdit', { announcement});
            }
        });
    }

export async function showWrite(req,res) {
    res.render('../public/ejs/admin/adminAncmWrite')
}

export async function create(req, res) {
    const { A_TITLE, A_CONTENT } = req.body
    const data = { A_TITLE, A_CONTENT }

    fetch(`${config.base}/admin/announcement`, {
        method: 'POST',
        headers:getHeaders(),
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(()=> res.redirect('/admin/announcement'))
        .catch(error => {
            // 에러 처리를 수행합니다.
            console.error(error);
        });
};

export async function modify(req, res) {
    const { A_NUM, A_TITLE, A_CONTENT } = req.body;
    const url = `${config.base}/admin/announcement/${A_NUM}`
    console.log('serU',A_NUM);
    fetch(url, {
        method: "PUT",
        headers: getHeaders(),
        body: JSON.stringify({ A_TITLE, A_CONTENT })
    })
    .then(() => res.redirect('/admin/announcement'))
}

export async function drop(req, res){
    const  A_NUM  = req.params.id; // 삭제할 약품의 M_NUM 파라미터에서 가져오기
    console.log('serD',A_NUM);
    fetch(config.base + '/admin/announcement/' + A_NUM, {
        headers: getHeaders(),
        method: 'DELETE'
    })
    .then(() => res.redirect('/admin/announcement') // 약품 삭제가 성공한 경우, 약품 목록 페이지로 리다이렉트
    )
}




function getHeaders() {
    const token = TokenStorage.getToken();
    return {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
    };
}