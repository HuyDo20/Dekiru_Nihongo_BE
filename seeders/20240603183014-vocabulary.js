"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Vocabulary",
			[
				{
					week_id: "1",
					vocab_name: " ",
					vocab_kanji: " ",
					vocab_meaning: " ",
					vocab_example: " ",
					vocab_image: " ",
					vocab_status_id: 2,
					vocab_audio: " ",
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Vocabulary", null, {});
	},
};
