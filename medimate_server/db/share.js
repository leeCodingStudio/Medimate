import SQ from 'sequelize';
import { sequelize } from './database.js';
import { User } from './user.js';

const DataTypes = SQ.DataTypes;

export const Share = sequelize.define(
    'tb_share',
    {
        S_NUM: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        }
    },
    { timestamps: false, freezeTableName: true }
);

Share.belongsTo(User, { foreignKey: 'S_SENDER_NUM' });
Share.belongsTo(User, { foreignKey: 'S_RECIVER_NUM' });