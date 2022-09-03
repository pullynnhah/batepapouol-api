import dotenv from "dotenv";
import {MongoClient} from "mongodb";

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);

const getDB = async () => {
  await mongoClient.connect();
  return mongoClient.db("api_uol_1");
};

export const db = getDB();
