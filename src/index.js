import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env",
});

const PORT = process.env.PORT || 4500;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`server is running on PORT ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(
            `Possibility of Mongodb Error\nServer is not running... \n ${error}`,
        );
        process.exit(1);
    });

// Handle uncaught exceptions and unhandled promise rejections
process.on("uncaughtException", (err) => {
    console.error("Uncaught Exception:", err);
    process.exit(1);
});

process.on("unhandledRejection", (reason) => {
    console.error("Unhandled Rejection:", reason);
    process.exit(1);
});
