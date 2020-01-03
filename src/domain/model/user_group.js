/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user_group', {
		user_id: {
			type: DataTypes.STRING(40),
			allowNull: false,
			references: {
				model: 'user',
				key: 'id'
			}
		},
		groups_id: {
			type: DataTypes.STRING(20),
			allowNull: false,
			references: {
				model: 'groups',
				key: 'id'
			}
		}
	}, {
		tableName: 'user_group',
        timestamps: false
	});
};
