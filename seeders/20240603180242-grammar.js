"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Grammar",
			[
				{
					week_id: "1",
					grammar_name: " ",
					grammar_structure: " ",
					grammar_description: " ",
					grammar_image: " ",
					grammar_status_id: 2,
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Grammar", null, {});
	},
};
