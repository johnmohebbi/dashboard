import mongoose from "mongoose";

export const dbConnection = async () => {
  const connection = {};
  const url = process.env.MONGODB_URL;
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(url);
    console.log("================== Connected successfully to db ===========");
    connection.isConnected = db.connections[0].readyState;
    return db;
  } catch (error) {
    console.log("================== Connection error ===========", error);
    throw new Error(error);
  }
};

