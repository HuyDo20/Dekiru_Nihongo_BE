"use strict";
module.exports = (sequelize, DataTypes) => {
	const Account = sequelize.define(
		"Account",
		{
			full_name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			email: {
				primaryKey: true,
				type: DataTypes.STRING,
				allowNull: false,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			phone_number: {
				type: DataTypes.STRING,
				
			},
			dob: {
				type: DataTypes.DATE,
				
			},
			avatar: {
				type: DataTypes.STRING,
				
			},
			role_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: "role",
					key: "role_id", 
				},
			},
			point: {
				type: DataTypes.INTEGER,
				defaultValue:0,
			},
			status_id: {
				type: DataTypes.INTEGER,
				defaultValue: false,
				references: {
					model: "status",
					key: "status_id",
				},
			},
		},
		{
			tableName: "Account",
			timestamps: false,
		},
	);

	return Account;
};
