const mongoose = require("mongoose");
const { Schema, model, ObjectId } = mongoose;

class UserClass {
	constructor() {
		this.Schema = new Schema(
            {
                userID: { type: ObjectId, ref: "User", required: true },
				publicKey: { type: String, required: true },
				privateKey: { type: String, required: true },                
			},
			{
				timestamps: true,
			}
		);
	}
}

const UserSchema = new UserClass();
module.exports = UserSchema.Schema;
