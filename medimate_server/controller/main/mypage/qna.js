import * as qnaRepository from '../../../data/main/mypage/qna.js'

export async function SearchQnaAll(req, res, next) {
    const page  = req.query.page || 1
    const { Q_TITLE } = req.query
    const datas = await (Q_TITLE
        ? qnaRepository.getByUName(Q_TITLE,page)
        : qnaRepository.getAll(page))

    if (!datas) {
        res.status(400).json(datas)
    } else {
        res.status(200).json(datas)
    }
};

export async function SearchQnaOne(req, res, next) {
    const U_NUM = req.U_NUM
    const page = req.query.page;
    const result = await qnaRepository.findByNum(U_NUM, page)
    if (!result) {
        res.status(400).json(result)
    } else {
        res.status(200).json(result)
    }
};




export async function MakeQna(req, res, next) {
    const { Q_TITLE } = req.body

    const result = await qnaRepository.create({
        Q_TITLE,
        U_NUM:req.U_NUM
    })
    if (!result) {
        res.status(402).json({message: `실패`})
    } else {
        res.status(200).json({success: `${result}번째 문의사항 등록 완료`})
    }
}
