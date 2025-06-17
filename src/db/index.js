import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

async function connectDB() {
    try {
        const connectionInstants = await mongoose.connect(
            `${process.env.MONGOURL}${DB_NAME}`,
            {
                serverSelectionTimeoutMS: 1000000,
                socketTimeoutMS: 45000,
            },
        );
        console.log(
            `\nConnected to DB host: ${connectionInstants.connection.host}`,
        );
    } catch (error) {
        console.log("MongoDb connection error", error);
        process.exit(1);
    }
}
export default connectDB;
