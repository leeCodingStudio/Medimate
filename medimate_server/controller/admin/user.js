import * as adminUserRepository from '../../data/admin/user.js';
// merge test

export async function showAll(req, res){
    const page = req.query.page || 1;
    const U_NAME = req.query.U_NAME;

    const datas = await (U_NAME
        ? adminUserRepository.getByUName(U_NAME, page)
        : adminUserRepository.getAll(page));

    res.status(200).json(datas);
}

export async function showOne(req, res){
    const U_NUM = req.params.id;
    const user = await adminUserRepository.getByUNum(U_NUM);

    if(user){
        res.status(200).json(user);
    }else{
        res.status(404).json({ message: `${U_NUM}번호 회원은 없습니다`});
    }
}

export async function modify(req, res){
    const U_NUM = req.params.id;
    const { U_ID, U_NAME, U_EMAIL, U_HP } = req.body;
    const user = await adminUserRepository.getByUNum(U_NUM);

    if(user){
        const updated = await adminUserRepository.update({ U_NUM, U_ID, U_NAME, U_EMAIL, U_HP });
        res.status(200).json(updated);
    }else{
        res.status(404).json({ message: `${U_NUM}번호 회원은 없습니다`});
    }
}

export async function drop(req, res){
    const U_NUM = req.params.id;
    const user = await adminUserRepository.getByUNum(U_NUM);

    if(user){
        await adminUserRepository.remove(U_NUM);
        res.sendStatus(204);
    }else{
        res.status(404).json({ message: `${U_NUM}번호 회원은 없습니다`});
    }
}