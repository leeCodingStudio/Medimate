import { config }  from '../../config.js';
import * as TokenStorage from '../../token.js'

export async function showAll(req, res){
    const U_NUM = req.query.U_NUM;
    const url = U_NUM
        ? `${config.base}/main/calendar?U_NUM=${U_NUM}`
        : `${config.base}/main/calendar`

    fetch(url, {headers: getHeaders()})
    .then(response => response.json())
    .then(datas=> {
        const tokenCheck = TokenStorage.getToken() ? true : false;
        if(datas.message){
            res.render('../public/ejs/main/index',{fail:false,goodbye:true,tokenCheck })
        }else{ 
            datas.forEach((data) => {
            data.title = data.C_TITLE;
            data.start = data.C_START.substr(0, 10);
            data.end = data.C_END ? data.C_END.substr(0, 10) : '';
            console.log(data);
        })
        res.render('../public/ejs/main/calendar', {datas,tokenCheck})

        }
    })
    // .then(datas => {
    //     datas.forEach((data) => {
    //         data.title = data.C_TITLE;
    //         data.start = data.C_START.substr(0, 10);
    //         data.end = data.C_END ? data.C_END.substr(0, 10) : '';
    //         console.log(data);
    //     })
    //     res.render('../public/ejs/main/calendar', {datas})
    // })
}

export async function create(req, res){
    const { C_TITLE, C_START, C_END } = req.query;

    fetch(config.base+'/main/calendar', {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({ C_TITLE, C_START, C_END })
    })
    .then(response => response.json())
    .then(() => {
        res.redirect('/main/calendar'); 
    })

}

export async function modify(req, res){
    const C_NUM = req.params.id;
    const { C_TITLE } = req.query;

    fetch(config.base+'/main/calendar/'+C_NUM, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify({ C_TITLE })
    })
    .then(response => response.json())
    .then(() => {
        res.redirect('/main/calendar'); 
    })
}

export async function drop(req, res){
    const C_NUM = req.params.id;
    fetch(config.base+'/main/calendar/'+C_NUM, {
        method: 'DELETE',
        headers: getHeaders()
    })
    .then(() => {
        res.redirect('/main/calendar'); 
    })
}

function getHeaders() {
    const token = TokenStorage.getToken();
    return {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
    };
}