import { config }  from '../../config.js';
import Pagination from '../../middleware/pagination.js';
import * as TokenStorage from '../../token.js'


//=========== 전체 보기 ===========
export async function showAll(req, res){
    const page = req.query.page || 1
    const M_NAME = req.query.M_NAME
    const url = M_NAME
        ? `${config.base}/admin/medicine?page=${page}&M_NAME=${M_NAME}`
        : `${config.base}/admin/medicine?page=${page}`

    fetch(url,{headers: getHeaders()})
    .then(response => response.json())
    .then(drugList => {
        if(drugList.message){
            const message = drugList.message
            res.render('../public/ejs/admin/adminmedicine',{ message })
        }else{
        let pagination = Pagination(page, drugList.count, 10);
        pagination.drugList = drugList.rows;
        pagination.M_NAME = M_NAME;
        res.render('../public/ejs/admin/adminmedicine', pagination);
        }
    });
}


//============ 약품등록 ============
export async function insertDrug(req, res){
    const {M_NUM, M_NAME, M_CORP, M_TYPE, M_SHAPE, M_MARK_FRONT, M_MARK_BACK, M_COLOR_FRONT, M_COLOR_BACK, M_CHARACTER, M_AXIS_LONG, M_AXIS_SHORT, M_THICKNESS} = req.body; // 새로 등록할 약품 정보 바디에서 가져오기
    const M_IMAGE = req.file ? `/img/${req.file.filename}` : ''

    const newDrug = {M_NUM, M_NAME, M_CORP, M_TYPE, M_SHAPE, M_MARK_FRONT, M_MARK_BACK, M_COLOR_FRONT, M_COLOR_BACK, M_CHARACTER, M_AXIS_LONG, M_AXIS_SHORT, M_THICKNESS, M_IMAGE }
    fetch(config.base+'/admin/medicine', {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(newDrug) // 약품 정보를 JSON 형식으로 변환
    })
    .then(response => response.json())
    .then(datas =>{
        if(!datas.message){
            res.redirect('/admin/medicine')
        }else{
            const message = datas.message
            res.render('../public/ejs/admin/adminmedicine',{ message })
        }
    })
}


//=========== 약품수정 =============
export async function updateDrug(req, res){
    const { M_NUM, M_NAME, M_CORP, M_TYPE, M_SHAPE, M_MARK_FRONT, M_MARK_BACK, M_COLOR_FRONT, M_COLOR_BACK, M_CHARACTER, M_AXIS_LONG, M_AXIS_SHORT, M_THICKNESS } = req.body; // 수정할 약품 정보 바디에서 가져오기
    const M_IMAGE = req.file ? `/img/${req.file.filename}` : ''
    const updatedDrug = { M_NUM, M_NAME, M_CORP, M_TYPE, M_SHAPE, M_MARK_FRONT, M_MARK_BACK, M_COLOR_FRONT, M_COLOR_BACK, M_CHARACTER, M_AXIS_LONG, M_AXIS_SHORT, M_THICKNESS, M_IMAGE };
    
    fetch(config.base + '/admin/medicine/' + M_NUM, {
        method: 'PUT',     //서버로 보내는거라 그대로 두기
        headers: getHeaders(),
        body: JSON.stringify(updatedDrug) // 약품 정보를 JSON 형식으로 변환
    })
    .then(response => response.json())
    .then(updatedDrug => {
        res.redirect('/admin/medicine'); // 약품 수정이 성공한 경우, 약품 목록 페이지로 리다이렉트
    })
}

//==========- 약품삭제 =============
export async function deleteDrug(req, res){
    const  M_NUM  = req.params.id; // 삭제할 약품의 M_NUM 파라미터에서 가져오기
    
    fetch(config.base + '/admin/medicine/' + M_NUM, {
        method: 'DELETE',
        headers: getHeaders()
    })
    .then(() => res.redirect('/admin/medicine') // 약품 삭제가 성공한 경우, 약품 목록 페이지로 리다이렉트
    )
}


function getHeaders() {
    const token = TokenStorage.getToken();
    return {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
    };
}