"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"KanjiWord",
			[
				{
					kanji_id: 1,
					kanji_word: " ",
					hiragana_character: " ",
					kanji_onyomi: " ",
					kanji_word_meaning: " ",
					kanji_word_status_id: 2,
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("KanjiWord", null, {});
	},
};
