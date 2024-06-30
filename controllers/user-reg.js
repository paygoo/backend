const UserModel = require("../models/user");

exports.registerUser = async (req, res, next) => {
	try {
		const user = new UserModel();
		const result = await user.registerUser();
		res.status(201).json({
			message: "User registered successfully",
			result: result,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: "User registration failed",
			error: error,
		});
	}
};
