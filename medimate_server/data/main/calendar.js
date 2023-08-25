import { Calendar } from "../../db/calendar.js";

export async function getByUNum(U_NUM){
    return Calendar.findAll( { where: { U_NUM }});
}

export async function getByCNum(C_NUM){
    return Calendar.findByPk(C_NUM);
}

export async function insert(calendar){
    return Calendar.create(calendar).then((data) => data.dataValues.C_NUM);
}

export async function update(calendar){
    return Calendar.findByPk(calendar.C_NUM).then((temp_calendar) => {
        temp_calendar.C_TITLE = calendar.C_TITLE;
        return temp_calendar.save();
    });
}

export async function remove(C_NUM){
    return Calendar.findByPk(C_NUM).then((calendar) => {
        calendar.destroy();
    });
}