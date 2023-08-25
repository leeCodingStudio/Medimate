import SQ from 'sequelize';
import { sequelize } from './database.js';
import { User } from './user.js';

const DateTypes = SQ.DataTypes;

export const QNA = sequelize.define(
    'tb_qna',{
        Q_NUM:{
            type:DateTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        Q_TITLE:{
            type:DateTypes.STRING(500),
            allowNull:false
        },
        Q_CONTENT:{
            type:DateTypes.STRING(500),
        },
        Q_ANSWER:{
            type:DateTypes.BOOLEAN,
            defaultValue:0,
        },
        U_NUM:{
            type:DateTypes.INTEGER
        }
    },
    { timestamps: true, freezeTableName: true }
);

User.hasOne(QNA,{foreignKey:'U_NUM'});
QNA.belongsTo(User,{foreignKey:'U_NUM'});