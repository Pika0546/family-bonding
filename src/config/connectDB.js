import mongoose from "mongoose";
const connection = {};
export const connectDB = async () => {
    if(connection.isConnected){
        return;
    }
    try {
        const db = await mongoose.connect(
            process.env.DB_URI,
            { useNewUrlParser: true, useUnifiedTopology: true }
        )
        connection.isConnected = db.connections[0].readyState;
        console.log('Connected to mongoDB')
    } catch (error) {
        console.log(error)
    }
}

