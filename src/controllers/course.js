const { Course } = require("../../models");
const { responseWithData } = require("../handlers/response_handler");

async function getAllCourse(req, res) {
	try {
		const courses = await Course.findAll();
		return responseWithData(res, 200, courses);
	} catch (error) {
		console.error("Error getting all courses:", error);
		throw error;
	}
}

module.exports = {
	getAllCourse,
};
