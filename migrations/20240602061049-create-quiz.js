"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Quiz", {
			quiz_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			week_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "Week",
					key: "week_id",
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			},
			quiz_name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			quiz_type_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			quiz_status_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "status",
					key: "status_id",
				},
			},
			point: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Quiz");
	},
};
