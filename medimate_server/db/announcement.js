import SQ from 'sequelize';
import { sequelize } from './database.js';
import { User } from './user.js';

const DataTypes = SQ.DataTypes;

// 테이블을 생성
export const Announcement = sequelize.define(
    'tb_announcement',
    // 컬럼들의 type과 제약조건을 설정
    {
        A_NUM: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        A_TITLE: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        A_DATE: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        A_CONTENT: {
            type: DataTypes.STRING(500),
            allowNull: false
        }
    },
    // 시간자동 생성을 막고 테이블명이 복수형으로 변하지 않도록 설정
    { timestamps: false, freezeTableName: true }
);

// 서로 num컬럼으로 1대1 참조 할 수 있도록 외래키를 설정
User.hasOne(Announcement, { foreignKey: 'U_NUM' });
Announcement.belongsTo(User, { foreignKey: 'U_NUM' });