// models/user.js
const mongoose = require("mongoose");
const userSchema = require("../schema/user");
const database = require("../utils/db");
const ProjectAccount = require("../utils/accountCreation");

class UserModel {
	constructor() {
		this.db = database.db;
		this.model = this.db.mongoose.model("User", userSchema);
	}

	async registerUser() {
		try {
			const projectAccount = new ProjectAccount();
			const privateKey = await projectAccount.getPrivateKey();
			const publicKey = await projectAccount.getPublicKey();

			const newUser = new this.model({
				privateKey: privateKey,
				publicKey: publicKey,
			});
			const result = await newUser.save();
			return result;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
}

module.exports = UserModel;
