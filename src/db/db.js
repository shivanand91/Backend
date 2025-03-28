import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({
    path: './.env'
})
const connectDB = async () => {
    try {
        const conInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB Connection Successfull: ${conInstance.connection.host}`);
        
    } catch (error) {
        console.log(`MongoDB Connection Failed !!! Error: ${error.message}`);
        process.exit(1);        
    }
}
export default connectDB