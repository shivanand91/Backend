import connectDB from "./db/db.js";
import dotenv from "dotenv";
import { app } from "./app.js"

dotenv.config({
    path: "./.env"
})

connectDB()
    .then(
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is listening at url 👉 http://localhost:${process.env.PORT}`);
            
        }),
        app.on("error", (error) => {
            console.log("Error", error);
            throw error
        })
    )
    .catch((error) => {
        console.log("MongoDB Connection Failed!!!", error);
        
    })
