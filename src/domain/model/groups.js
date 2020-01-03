/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('groups', {
		id: {
			type: DataTypes.STRING(40),
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		limit_user: {
			type: DataTypes.INTEGER(3).UNSIGNED,
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
		tableName: 'groups',
        timestamps: false
	});
};
