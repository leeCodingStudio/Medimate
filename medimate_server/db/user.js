import SQ from 'sequelize';
import { sequelize } from './database.js';

const DataTypes = SQ.DataTypes;

export const User = sequelize.define(
    'tb_user',
    {
        U_NUM: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        U_ID: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        U_PW: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        U_NAME: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        U_EMAIL: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        U_ZIP_CODE: {
            type: DataTypes.STRING(100),
        },
        U_ADDRESS1: {
            type: DataTypes.STRING(256),
        },
        U_ADDRESS2: {
            type: DataTypes.STRING(256),
        },
        U_DATE_JOIN: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        U_ID_TYPE: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        U_HP: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    },
    { timestamps: false, freezeTableName: true }
);