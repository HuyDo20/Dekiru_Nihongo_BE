const { request } = require("express");
const { Status, sequelize } = require("../../models");
const { responseWithData, ok, error } = require("../handlers/response_handler");
const { QueryTypes } = require("sequelize");

async function getAllStatus(req, res) {
	try {
		// const status = await Status.findAll();
		const query = `Select * from status`;

		const status = await sequelize.query(query, {
			type: QueryTypes.SELECT,
		});
		return responseWithData(res, 200, status);
	} catch (error) {
		console.error("Error getting status", error);
		throw error;
	}
}

async function login(req, res) {
	try {
		const { studentId, roleId } = req.body;

		const query = `Select * from Users where studentId="${studentId}" and roleId =${roleId}  `;
		const checkUser = await sequelize.query(query, {
			type: QueryTypes.SELECT,
		});
		console.log(gggg)
		return ok(res, "Tạo người dùng thành công!");
		return responseWithData(res, 200, checkUser);
		// return res.send(checkUser)
	} catch (err) {
		console.log(err);
		return error(res)
	}
}

module.exports = {
	getAllStatus,
	login,
};
