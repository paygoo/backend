const mongoose = require("mongoose");
const { Schema, model, ObjectId } = mongoose;

class TrackTransactionClass {
	constructor() {
		this.Schema = new Schema(
			{
				senderAddress: { type: String, ref: "User", required: true },
				recieverAddress: { type: String, ref: "User", required: true },
				curType: {
					type: String,
					required: true,
					enum: ["crypto_funding", "fiat_funding"],
				},
				recurrence: {
					type: String,
					required: true,
					enum: ["payment", "stream"],
				},
				amount: { type: Number, required: true },
				currency: { type: String, required: true },
				status: {
					type: String,
					required: true,
					enum: ["pending", "completed", "failed"],
				},
				transactionHash: { type: String, required: true },
			},
			{
				timestamps: true,
			}
		);
	}
}

const TransactionSchema = new TrackTransactionClass();
module.exports = TransactionSchema.Schema;
