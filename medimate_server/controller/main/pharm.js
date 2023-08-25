import * as dataRepository from '../../data/main/pharm.js';


// 이름으로 찾기
export async function SearchDrugInfo(req, res, next) {
    const page = req.query.page || 1
    const P_ADDRESS = req.query.P_ADDRESS  || '';
    const P_NAME = req.query.P_NAME || '';
    const total = {P_ADDRESS, P_NAME}
    const datas = await(total
        ? dataRepository.getByDrugInfo(total,page)
        : dataRepository.getAll(page))
    if (!datas) {
        res.status(400).json(datas)
    } else {
        res.status(200).json(datas)
    }
};