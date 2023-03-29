import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import ordersRoute from "./routes/orders.js"
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express()
dotenv.config()

mongoose.set('strictQuery', false)
const connect =  async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongoDB")
      } catch (error) {
        console.log(error);
      }
}

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });

  //middlewares
  app.use(cors())
  app.use(cookieParser())
  app.use(express.json())

  app.use("/api/auth",authRoute)
  app.use("/api/users",usersRoute)
  app.use("/api/orders",ordersRoute)

  app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });

  
app.get("/", (req,res) => {
  res.send("first request")
})
app.listen(8800, ()=>{
    connect()
    console.log("connected to backend")
})
