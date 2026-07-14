import dns from 'node:dns'; // a workaround for a device dns issue during development.
import mongoose from 'mongoose';
import dotenv from 'dotenv/config'

// comment out dns in prodcution code.
dns.setServers(["8.8.8.8","1.1.1.1"]);

export const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log("DB connection successfull:",connectionInstance.connection.host);
    } catch (error) {
        console.log("DB connection failed: ",error);
    }
}