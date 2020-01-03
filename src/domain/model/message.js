/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('message', {
		id: {
			type: DataTypes.STRING(40),
			allowNull: false,
			primaryKey: true
		},
		user_id: {
			type: DataTypes.STRING(40),
			allowNull: false,
			references: {
				model: 'user',
				key: 'id'
			}
		},
		groups_id: {
			type: DataTypes.STRING(40),
			allowNull: false,
			references: {
				model: 'groups',
				key: 'id'
			}
		},
		type: {
			type: DataTypes.ENUM('file','text'),
			allowNull: false,
			defaultValue: 'text'
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		state: {
			type: DataTypes.CHAR(1),
			allowNull: true,
			defaultValue: '1'
		}
	}, {
		tableName: 'message',
        timestamps: false
	});
};
