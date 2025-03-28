import express from 'express'
import connectDB from './db/db'

const app = express()

connectDB()
    .then(() => {
        console.log(`MongoDB Connection Successfull`);
    })
    .catch((error) => {
        console.log(`MongoDB Connection Failed !!! Error: ${error.message}`);
        process.exit(1);
    })


export {app}