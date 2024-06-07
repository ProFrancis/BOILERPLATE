import dotenv from "dotenv"

dotenv.config(); 

export const ENV = {
  PORT: process.env.PORT,
  MONGO: process.env.MONGO_URI,
  DBNAME: process.env.DBNAME
}