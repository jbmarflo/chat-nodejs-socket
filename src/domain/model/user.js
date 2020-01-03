/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user', {
		id: {
			type: DataTypes.STRING(40),
			allowNull: false,
			primaryKey: true
		},
		username: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		password: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		email: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		name: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		lastname: {
			type: DataTypes.STRING(20),
			allowNull: false
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
		tableName: 'user',
        timestamps: false
	});
};
