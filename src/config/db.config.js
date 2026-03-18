import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

let db;

const uri = process.env.MONGO_URI;

if (!uri) {
  throw new Error("MONGO_URI is not defined in .env file");
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});



export const connectDB = async () => {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    db = client.db("database3"); 

    await client.db("admin").command({ ping: 1 });
    console.log("✅ Ping successful");

  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1);
  }
};

export { client };
export const getDB = () => db;
