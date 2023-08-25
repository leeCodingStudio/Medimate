import SQ from 'sequelize';
import { sequelize } from './database.js';

const DataTypes = SQ.DataTypes;

// 테이블을 생성
export const Drugstore = sequelize.define(
    'tb_pharm',
    // 컬럼들의 type과 제약조건을 설정
    {
        P_NUM: {
            type: DataTypes.STRING(100),
            allowNull: false,
            primaryKey: true
        },
        P_NAME: {
            type: DataTypes.STRING(100),
            allowNull: false
        },        
        P_ADDRESS: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        P_PHONE: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        P_MON_S: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        P_MON_C: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        P_TUE_S: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        P_TUE_C: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        P_WED_S: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        P_WED_C: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        P_THU_S: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        P_THU_C: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        P_FRI_S: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        P_FRI_C: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        P_SAT_S: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        P_SAT_C: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        P_SUN_S: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        P_SUN_C: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        P_HOLI_S: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        P_HOLI_C: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        P_LATI: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        P_LONGI: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
    },
    // 시간자동 생성을 막고 테이블명이 복수형으로 변하지 않도록 설정
    { timestamps: false, freezeTableName: true }
);