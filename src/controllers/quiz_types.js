const { QuizType } = require("../../models");
const { responseWithData } = require("../handlers/response_handler");

async function getAllQuizTypes(req, res) {
	try {
		const quiz_types = await QuizType.findAll();
		return responseWithData(res, 200, quiz_types);
	} catch (error) {
		console.error("Error getting quiz types:", error);
		throw error;
	}
}

module.exports = {
	getAllQuizTypes,
};
