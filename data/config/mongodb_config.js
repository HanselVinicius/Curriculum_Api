import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect(
    "mongodb+srv://"+process.env.MONGO_CLIENT+":"+process.env.MONGO_PASSWORD+"@cluster0.xymad6d.mongodb.net/curriculum"
)

console.log(process.env.MONGO_CLIENT)

let db = mongoose.connection;

export default db;