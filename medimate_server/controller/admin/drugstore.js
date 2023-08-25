import * as dataRepository from '../../data/admin/drugstore.js';


// 생성
export async function createDrugstore(req, res, next){
    // body에 존재하는 id, name, ph, email, address를 선언
    const {P_NUM,P_NAME,P_ADDRESS,P_PHONE,P_MON_S,P_MON_C,P_TUE_S,P_TUE_C,P_WED_S,P_WED_C,P_THU_S,P_THU_C,P_FRI_S,P_FRI_C,P_SAT_S,P_SAT_C,P_SUN_S,P_SUN_C,P_HOLI_S,P_HOLI_C,P_LATI,P_LONGI} = req.body;
    const found = await dataRepository.getByDrugNum(P_NUM)
    if(found){
        res.status(401).json({message: `이미 존재하는 약국`});
    }else{
    // 성공시에 201페이지를 출력
    const result = await dataRepository.insert({
        P_NUM,P_NAME,P_ADDRESS,P_PHONE,P_MON_S,P_MON_C,P_TUE_S,P_TUE_C,P_WED_S,P_WED_C,P_THU_S,P_THU_C,P_FRI_S,P_FRI_C,P_SAT_S,P_SAT_C,P_SUN_S,P_SUN_C,P_HOLI_S,P_HOLI_C,P_LATI,P_LONGI
    })
    if (result) {
        res.status(200).json(result)
    } else {
        res.status(402).json({message:`약국정보 생성 오류`})
}}};

//  약국이름으로 찾기
export async function searchDrugName(req,res,next){
    const P_NAME = req.query.P_NAME;
    const result = await (P_NAME
        ? dataRepository.getByDrugName(P_NAME, page)
        : dataRepository.getAll(page));
    if (result) {
        res.status(200).json(result);
    } else {
        restart.status(401).json({message:`약국이름 찾기 오류`})
    }
};

// 약국번호로 찾기
export async function searchDrugNum(req, res, next) {
    const P_NUM = req.params.id
    const result = await dataRepository.getByDrugNum(P_NUM)
    if (result) {
        res.status(200).json(result)
    } else {
        res.status(400).json({message:`약국번호 찾기 오류`})
    }
};


// 전체 출력 (페이지네이션 추가)
export async function getAllDrugstore(req,res){
    const page  = req.query.page || 1
    const P_NAME = req.query.P_NAME;
    const result = await (P_NAME 
        ? dataRepository.getByDrugName(P_NAME,page)
        : dataRepository.getAll(page))
    if (result) {
        res.status(200).json(result)
    } else {
        res.status(400).json({message:`약국 전체 찾기 오류`})
    }
};

// 수정
export async function updateDrugstore(req, res){
    const P_NUM = req.params.id;
    console.log(P_NUM);
    const {P_NAME,P_ADDRESS,P_PHONE,P_MON_S,P_MON_C,P_TUE_S,P_TUE_C,P_WED_S,P_WED_C,P_THU_S,P_THU_C,P_FRI_S,P_FRI_C,P_SAT_S,P_SAT_C,P_SUN_S,P_SUN_C,P_HOLI_S,P_HOLI_C,P_LATI,P_LONGI} = req.body;
    const found = await dataRepository.getByDrugNum(P_NUM);
    if (found) {
        const result = await dataRepository.update(P_NUM,{P_NAME,P_ADDRESS,P_PHONE,P_MON_S,P_MON_C,P_TUE_S,P_TUE_C,P_WED_S,P_WED_C,P_THU_S,P_THU_C,P_FRI_S,P_FRI_C,P_SAT_S,P_SAT_C,P_SUN_S,P_SUN_C,P_HOLI_S,P_HOLI_C,P_LATI,P_LONGI});
        res.status(200).json(result)
    } else {
        res.status(402).json({message:`약국정보 수정오류`})
    }
};

// 삭제

export async function deleteDrugstore(req, res){
    const P_NUM = req.params.id;
    const found = await dataRepository.getByDrugNum(P_NUM);
    
    if(found){
        await dataRepository.remove(P_NUM);
        res.sendStatus(204);
    }else{
        res.status(404).json({ message: `약국정보 삭제오류`});
    }}