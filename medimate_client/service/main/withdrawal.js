import { response } from 'express';
import { config } from '../../config.js';
import * as TokenStorage from '../../token.js'


export async function show(req, res) {
    const tokenCheck = TokenStorage.getToken() ? true : false;
    const message = tokenCheck ? undefined : '로그인 필요';
    res.render('../public/ejs/main/mypageWithdrawal',{flag: false,success:false, tokenCheck, message});
}

export async function Delete(req,res){
    fetch(config.base + '/main/mypage/withdrawal',
    {method: 'DELETE',headers: getHeaders()})
    .then(response => response.json())
    .then(() => {
        goodbyeHeaders()
        res.render('../public/ejs/main/index',{goodbye:false,false:true,tokenCheck:false,adminCheck:false})
    })
}



function getHeaders() {
    const token = TokenStorage.getToken();
    console.log(token);
    return {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
    };
}

function goodbyeHeaders() {
    const token = TokenStorage.clearToken();
}