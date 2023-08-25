import * as shareRepository from '../../../data/main/mypage/share.js';

export async function showById(req, res){
    const { U_ID } = req.body;
    const user = await shareRepository.getByUId(U_ID);
    if(user){
        res.status(200).json(user);
    }else{
        res.status(404).json({ message: `${U_ID}는 없는 회원입니다`});
    }
}

export async function showAll(req, res){
    const U_NUM = req.U_NUM;
    const SenderList = await shareRepository.getBySenderNum(U_NUM);
    const ReciverList = await shareRepository.getByReciverNum(U_NUM);

    res.status(200).json({SenderList, ReciverList});
}

export async function create(req, res){
    const U_NUM = req.U_NUM;
    const { S_RECIVER_NUM } = req.body;
    const share = await shareRepository.insert({ S_SENDER_NUM: U_NUM, S_RECIVER_NUM });

    res.status(200).json(share);
}

export async function drop(req, res){
    const S_NUM = req.params.id;
    const share = await shareRepository.getBySNum(S_NUM);

    if(share){
        await shareRepository.remove(S_NUM);
        res.sendStatus(204);
    }else{
        res.status(404).json({ message: `${S_NUM}번호 공유 기록이 없습니다`});
    }
}