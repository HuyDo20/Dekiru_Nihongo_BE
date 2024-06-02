"use strict";
module.exports = (sequelize, DataTypes) => {
	const Role = sequelize.define(
		"Role",
		{
			role_id: { type: DataTypes.INTEGER,
				 primaryKey: true,
				  autoIncrement: true },
			role_name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			tableName: "Role",
			timestamps: false,
		},
	);

	// Role.associate = function (models) {
	// 	Role.hasMany(models.User, { foreignKey: "roleId", as: "users" });
	// };

	return Role;
};
