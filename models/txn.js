const mongoose = require("mongoose");
const transactionSchema = require("../schema/transaction");
const database = require("../utils/db");

class TransactionModel {
	constructor() {
		this.db = database.db;
		this.model = this.db.mongoose.model("Transaction", transactionSchema);
	}

	async createTransaction(transactionData) {
		try {
			const newTransaction = new this.model(transactionData);
			const result = await newTransaction.save();
			return result;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	async getTransactionsByUser(userId) {
		try {
			const transactions = await this.model
				.find({
					$or: [{ senderAddress: userId }, { recieverAddress: userId }],
				})
				.lean();
			return transactions;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
}

module.exports = TransactionModel;
