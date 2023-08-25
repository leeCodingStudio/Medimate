import {Op}from "sequelize"
import { Medicine } from "../../db/medicine.js";

//Pagnation
    export async function getAll(page){
        let limit = 10;
        let offset = (page - 1) * limit;
        return Medicine.findAndCountAll({
            limit,
            offset,
            order: [
                ['M_NUM', 'DESC']
            ]
        });
    }

    export async function getByUName(M_NAME, page){
        let limit = 10;
        let offset = (page - 1) * limit;
        return Medicine.findAndCountAll({
            limit,
            offset,
            order: [
                ['M_NUM', 'DESC']
            ],
            where: { M_NAME: { [Op.like]: `%${M_NAME}%` } }
        });
    }


    export async function findByName(mName){
        return Medicine.findOne({where:{mName}})
    }

    export async function findByNum(mNum){
        return Medicine.findByPk(mNum)
    }

    export async function create(medicine){
        return Medicine.create(medicine).then((data)=>data.dataValues)
    }

    export async function update(id,medicine){
        return findByNum(id)
        .then((data)=>{
            data.M_NAME = medicine.M_NAME;
            data.M_CORP = medicine.M_CORP;
            data.M_TYPE = medicine.M_TYPE ;
            data.M_MARK_FRONT = medicine.M_MARK_FRONT;
            data.M_MARK_BACK = medicine.M_MARK_BACK;
            data.M_COLOR_FRONT = medicine.M_COLOR_FRONT;
            data.M_COLOR_BACK = medicine.M_COLOR_BACK;
            data.M_CHARACTER = medicine.M_CHARACTER;
            data.M_AXIS_LONG = medicine.M_AXIS_LONG;
            data.M_AXIS_SHORT = medicine.M_AXIS_SHORT;
            data.M_THICKNESS = medicine.M_THICKNESS;
            data.M_IMAGE = medicine.M_IMAGE || data.M_IMAGE;
            return data.save()
        })
}


    export async function remove(id){
        return findByNum(id).then((data)=>{data.destroy()})
    }



