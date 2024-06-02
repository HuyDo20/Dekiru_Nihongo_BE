const { Alphabet } = require("../../models");
const { responseWithData } = require("../handlers/response_handler");

async function getAllAlphabet(req, res) {
	try {
		const alphabets = await Alphabet.findAll();
		return responseWithData(res, 200, alphabets);
	} catch (error) {
		console.error("Error getting all alphabet:", error);
		throw error;
	}
}

module.exports = {
	getAllAlphabet,
};
