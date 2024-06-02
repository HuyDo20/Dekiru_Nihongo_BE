"use strict";

const alphabet = require("../models/alphabet");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Alphabet",
			[
				{
					type_id: 1,
					japanese_character: "あ",
					romaji_character: "a",
					alphabet_audio: "D:/alphabet/audio/a",
					alphabet_image: "D:/alphabet/image/a",
				},
				{
					type_id: 1,
					japanese_character: "い",
					romaji_character: "i",
					alphabet_audio: "D:/alphabet/audio/i",
					alphabet_image: "D:/alphabet/image/i",
				},
				{
					type_id: 1,
					japanese_character: "う",
					romaji_character: "u",
					alphabet_audio: "D:/alphabet/audio/u",
					alphabet_image: "D:/alphabet/image/u",
				},
				{
					type_id: 1,
					japanese_character: "え",
					romaji_character: "e",
					alphabet_audio: "D:/alphabet/audio/e",
					alphabet_image: "D:/alphabet/image/e",
				},
				{
					type_id: 1,
					japanese_character: "お",
					romaji_character: "o",
					alphabet_audio: "D:/alphabet/audio/o",
					alphabet_image: "D:/alphabet/image/o",
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Alphabet", null, {});
	},
};
