import { response } from 'express';
import { config } from '../../config.js';
import * as TokenStorage from '../../token.js'

const token = TokenStorage.getToken()
const aut2 = `Bearer ${token}`

export async function Show(req,res){
    res.render('../public/ejs/main/join',
    {wrongpw: true, wrongid : true, tokenCheck:false})
}
export async function Join(req,res){
    const { U_ID,U_PW ,U_NAME, U_EMAIL,
            U_ZIP_CODE,U_ADDRESS1,U_ADDRESS2,
            U_HP,U_PW_CHECK} = req.body;
    const U_ID_TYPE = 'O'
    console.log(U_PW)
    console.log(U_PW_CHECK)
    console.log(U_PW === U_PW_CHECK);

    if(U_PW !== U_PW_CHECK) {
        res.render('../public/ejs/main/join',
        {wrongpw : false, wrongid : true})
    }else{ 
        await fetch(config.base + '/main/join',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            U_ID:U_ID,
            U_PW:U_PW,
            U_NAME:U_NAME,
            U_EMAIL:U_EMAIL,
            U_ZIP_CODE:U_ZIP_CODE,
            U_ADDRESS1:U_ADDRESS1,
            U_ADDRESS2:U_ADDRESS2,
            U_HP:U_HP,
            U_ID_TYPE:U_ID_TYPE})
    })
    .then(response => response.json())
    .then(data=>{
        if(data.message){
            res.render('../public/ejs/main/join',{wrongpw : true,wrongid:false,tokenCheck:false})
        }else{
            console.log(data)
            res.render('../public/ejs/main/login',{okjoin: false,fail:true,tokenCheck:false})
        }
    })
}
}




