import * as calendarRepository from '../../data/main/calendar.js';

export async function showAll(req, res){
    const U_NUM = req.query.U_NUM || req.U_NUM;
    const datas = await calendarRepository.getByUNum(U_NUM);

    res.status(200).json(datas);
}

export async function showOne(req, res){
    const C_NUM = req.params.id;
    const data = await calendarRepository.getByCNum(C_NUM);
    
    if(data){
        res.status(200).json(data);
    }else{
        res.status(404).json({ message: `${C_NUM}번호 일정이 없습니다`});
    }
    
}

export async function create(req, res){
    const U_NUM = req.U_NUM;
    const { C_TITLE, C_START, C_END } = req.body;
    const calendar = await calendarRepository.insert({ U_NUM, C_TITLE, C_START, C_END });

    res.status(200).json(calendar);
}

export async function modify(req, res){
    const C_NUM = req.params.id;
    const { C_TITLE } = req.body;
    const calendar = await calendarRepository.getByCNum(C_NUM);
    
    if(calendar){
        const updated = await calendarRepository.update({ C_NUM, C_TITLE });
        res.status(200).json(updated);
    }else{
        res.status(404).json({ message: `${C_NUM}번호 일정이 없습니다`});
    }
}

export async function drop(req, res){
    const C_NUM = req.params.id;
    const calendar = await calendarRepository.getByCNum(C_NUM);

    if(calendar){
        await calendarRepository.remove(C_NUM);
        res.sendStatus(204);
    }else{
        res.status(404).json({ message: `${C_NUM}번호 일정이 없습니다`});
    }
}