import * as dataRepository from '../../data/admin/announcement.js';


// 생성 (어디가 문제?)
export async function createAnnounce(req, res){
    // body에 존재하는 id, name, ph, email, address를 선언
    const U_NUM = req.U_NUM;
    const {A_TITLE,A_CONTENT} = req.body;
    const result = await dataRepository.insert({
        U_NUM,
        A_TITLE,
        A_CONTENT
    })
    if (result) {
    // 성공시에 201페이지를 출력
    res.status(201).json(result);
    } else {
    res.status(404).json({ message: `공지사항 등록 오류` });
    }
}


// 공지사항번호로 찾기
export async function searchAnnounceNum(req, res) {
    const P_NUM = req.params.id
    const result = await dataRepository.getByAnnounceNum(P_NUM)
    if (result) {
        res.status(200).json(result)
    } else {
        res.status(400).json({message: `공지사항 번호로 찾기 오류`})
    }
};


// 전체 출력
export async function getAllAnnounce(req,res){
    const page  = req.query.page || 1
    const A_TITLE = req.query.A_TITLE;
    const result = await (A_TITLE
        ? dataRepository.getByTitle(A_TITLE, page)
        : dataRepository.getAll(page));
    if (!result) {
        res.status(400).json({message: `공지사항 전체출력오류`})
    } else {
        res.status(200).json(result)
    }
};


// 수정
export async function updateAnnounce(req, res){
    const id = req.params.id;
    const {A_TITLE,A_CONTENT} = req.body;
    const found = await dataRepository.getByAnnounceNum(id);
    if (found) {
        const result = await dataRepository.update(id, {A_TITLE, A_CONTENT});
        res.status(200).json(result)
    } else {
        res.status(402).json({message: `공지사항 수정오류`})
    }
}


// 삭제
export async function deleteAnnounce(req,res){
    const A_NUM = req.params.id;
    const found = await dataRepository.getByAnnounceNum(A_NUM);
    if(found){
        await dataRepository.remove(A_NUM);
        res.sendStatus(204);
    }else{
        res.status(404).json({ message: `공지사항 삭제오류`});
    }
}