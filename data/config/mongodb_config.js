import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect(
   process.env.MONGO_CLIENT
)

console.log(process.env.MONGO_CLIENT)

let db = mongoose.connection;

export default db;