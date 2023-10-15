import mongoose from "mongoose";

export default async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);

    const connection = mongoose.connection;
    connection.on("conncted", () => {
      console.log("Connected to database");
    });
    connection.on("error", (error) => {
      console.error("Error connecting to database: ", error);
    });
  } catch (error) {
    console.error("Error connecting to database: ", error);
  }
}
