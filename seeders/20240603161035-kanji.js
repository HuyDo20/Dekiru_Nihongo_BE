"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Kanji",
			[
				{
					week_id: "1",
					kanji_name: " ",
					cv_spelling: " ",
					kanji_kunyomi: " ",
					kanji_onyomi: "",
					kanji_image: " ",
					kanji_status_id: 2,
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Kanji", null, {});
	},
};
