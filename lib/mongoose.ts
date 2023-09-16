import mongoose from "mongoose";

let isConnected = false;

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_URL: string;
    }
  }
}

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) console.log("MONGODB_URL not found");
  if (isConnected) console.log(`Already connected to MongoDB`);

  try {
    await mongoose.connect(process.env.MONGODB_URL);

    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};
