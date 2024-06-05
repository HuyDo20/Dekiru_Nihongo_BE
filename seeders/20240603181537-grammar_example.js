"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"GrammarExample",
			[
				{
					grammar_id: "1",
					grammar_example: " ",
					grammar_example_meaning: " ",
					grammar_example_status_id: 2,
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("GrammarExample", null, {});
	},
};
