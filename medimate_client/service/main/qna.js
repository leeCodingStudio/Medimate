import { config } from '../../config.js';
import Pagination from '../../middleware/pagination.js';
import * as TokenStorage from '../../token.js'


export async function show(req, res) {
    const page = req.query.page || 1
    const Q_TITLE = req.query.Q_TITLE
    const url = Q_TITLE
    ? `${config.base}/main/mypage/qna?page=${page}&Q_TITLE=${Q_TITLE}`
    : `${config.base}/main/mypage/qna?page=${page}`;
    fetch(url, {headers: getHeaders()})
    .then(response => response.json())
    .then(qnaList => {

        if(qnaList.message){
            const message = qnaList.message;
            res.render('../public/ejs/main/mypageQnA',{message})
        }else{
            let pagination = Pagination(page, qnaList.count, 6);
            pagination.qnaList = qnaList.rows;
            pagination.flag = false;
            pagination.success = false;
            pagination.tokenCheck = TokenStorage.getToken() ? true : false;

            res.render('../public/ejs/main/mypageQnA', pagination)
        }
    });
}


/*사용자 문의사항 작성하기*/
export async function  create(req,res){
    const {Q_TITLE} = req.body
    fetch(config.base + '/main/mypage/qna',{
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({
            Q_TITLE:Q_TITLE
        })
    })
    .then(response=>response.json())
    .then(()=> res.redirect('/main/mypage/qna'))
    .catch(error => {});
}

function getHeaders() {
    const token = TokenStorage.getToken();
    console.log(token);
    return {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
    };
}