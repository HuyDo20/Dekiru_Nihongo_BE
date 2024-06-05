"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Vocabulary",
			[
				{
					quiz_id: "1",
					question_content: " ",
					question_answer: " ",
					question_type_id: 2,
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Vocabulary", null, {});
	},
};
