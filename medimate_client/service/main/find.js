import { config } from '../../config.js';
import { emailPost } from '../../middleware/email.js';
import * as TokenStorage from '../../token.js'

export async function showAll(req, res){
    res.render('../public/ejs/main/findId', {U_ID:false, tokenCheck:false,mailId:false, mailPw:false })
}

export async function findId(req, res){
    const { U_NAME, U_EMAIL } = req.body;
    const url = `${config.base}/main/find/id`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ U_NAME, U_EMAIL })
    })
    .then(response => response.json())
    .then(datas => {

        if(datas.U_ID){
            const U_ID = datas.U_ID
            emailPost(U_EMAIL, `아이디는 ${U_ID} 입니다.`);
            res.render('../public/ejs/main/findId', { tokenCheck:false, mailId:true, mailPw:false });
        }else{
            const message = datas.message;
            res.render('../public/ejs/main/findId', {  tokenCheck:false, message, mailId:false, mailPw:false  });
        }
    });
}

export async function findPw(req, res){
    const { U_ID, U_NAME, U_EMAIL } = req.body;
    const U_PW = Math.random().toString(36).slice(2);
    const url = `${config.base}/main/find/pw`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ U_ID, U_NAME, U_EMAIL, U_PW })
    })
    .then(response => response.json())
    .then(datas => {
        if(!datas.message){
            emailPost(U_EMAIL, `임시 비밀번호는 ${U_PW} 입니다.`);
            res.render('../public/ejs/main/findId', { tokenCheck:false,mailId:false, mailPw:true });
        }else{
            const message = datas.message;
            res.render('../public/ejs/main/findId', { tokenCheck:false, message,mailId:false, mailPw:false });
        }
    });

    
}