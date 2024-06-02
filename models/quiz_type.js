"use strict";
module.exports = (sequelize, DataTypes) => {
	const QuizType = sequelize.define(
		"QuizType",
		{
			quiz_type_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			quiz_type_name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			tableName: "QuizType",
			timestamps: false,
		},
	);

	return QuizType;
};
