import { config }  from '../../config.js';
import Pagination from '../../middleware/pagination.js';
import * as TokenStorage from '../../token.js'

export async function showAll(req, res){
    const page = req.query.page || 1
    const U_NAME = req.query.U_NAME;
    const url = U_NAME
        ? `${config.base}/admin/user?page=${page}&U_NAME=${U_NAME}`
        : `${config.base}/admin/user?page=${page}`;

    fetch(url,{headers: getHeaders()})
    .then(response => response.json())
    .then(test=> {
        if(test.message){
            const message = test.message
            res.render('../public/ejs/admin/adminUser',{ message })
        }else{
            let pagination = Pagination(page, test.count, 10);
            pagination.list = test.rows;
            pagination.U_NAME = U_NAME;
            res.render('../public/ejs/admin/adminUser', pagination);
        }
    })
    // .then(datas => {
    //     let pagination = Pagination(page, datas.count, 10);
    //     pagination.list = datas.rows;
    //     pagination.U_NAME = U_NAME;
    //     res.render('../public/ejs/admin/adminUser', pagination);
    // })
}


export async function modify(req, res){
    const { U_NUM, U_ID, U_NAME, U_EMAIL, U_HP } = req.body;

    fetch(config.base+'/admin/user/'+U_NUM, {
        method: "PUT",
        headers: getHeaders(),
        body: JSON.stringify({ U_NUM, U_ID, U_NAME, U_EMAIL, U_HP })
    }).then(() => res.redirect('/admin/user'))
}

export async function drop(req, res){
    const U_NUM = req.params.id;

    fetch(config.base+'/admin/user/'+U_NUM, {
        method: "DELETE",
        headers: getHeaders()
    }).then(() => res.redirect('/admin/user'))
}


function getHeaders() {
    const token = TokenStorage.getToken();
    console.log(token);
    return {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
    };
}