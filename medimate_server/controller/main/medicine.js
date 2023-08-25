import * as medicineRepository from '../../data/main/medicine.js'

export async function SearchMedicineAll(req, res, next) {
    const page = req.query.page || 1
    const M_NUM = req.query.M_NUM  || '';
    const M_NAME = req.query.M_NAME || '';
    const M_TYPE = req.query.M_TYPE || '';
    const M_CORP = req.query.M_CORP || '';
    const M_MARK = req.query.M_MARK || '';
    const M_COLOR = req.query.M_COLOR || '';
    const M_CHARACTER = req.query.M_CHARACTER || '';

    const total = {M_NUM, M_NAME, M_CORP, M_TYPE, M_MARK, M_COLOR, M_CHARACTER}

    const datas = await(total
        ? medicineRepository.getByUName(total,page)
        : medicineRepository.getAll(page))

    if (!datas) {
        res.status(400).json(datas)
    } else {
        res.status(200).json(datas)
    }
};

export async function SearchMedicineOne(req, res, next) {
    const pNum = req.params.id
    const result = await medicineRepository.findByNum(pNum)
    if (!result) {
        res.status(400).json(result)
    } else {
        res.status(200).json(result)
    }
};



