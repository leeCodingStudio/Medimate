import SQ from 'sequelize'
import {sequelize}from './database.js'

const DateTypes = SQ.DataTypes;

export const Medicine = sequelize.define(
    'tb_medicine',{
        M_NUM:{
            type:DateTypes.STRING(100),
            primaryKey:true,
            allowNull:false
        },
        M_NAME:{
            type:DateTypes.STRING(200),
            allowNull:false
        },
        M_CORP:{
            type:DateTypes.STRING(100),
            allowNull:false
        },
        M_TYPE:{
            type:DateTypes.STRING(100),
            allowNull:false,
        },
        M_SHAPE:{
            type:DateTypes.STRING(100),
        },
        M_MARK_FRONT:{
            type:DateTypes.STRING(200),
        },
        M_MARK_BACK:{
            type:DateTypes.STRING(200),
        },
        M_COLOR_FRONT:{
            type:DateTypes.STRING(200)
        },
        M_COLOR_BACK:{
            type:DateTypes.STRING(200),
        },
        M_CHARACTER:{
            type:DateTypes.STRING(100)
        },
        M_AXIS_LONG:{
            type:DateTypes.STRING(100)
        },
        M_AXIS_SHORT:{
            type:DateTypes.STRING(100)
        },
        M_THICKNESS:{
            type:DateTypes.STRING(100)
        },
        M_IMAGE:{
            type:DateTypes.STRING(255)
        }
    },
    { timestamps: false, freezeTableName: true }
    );
