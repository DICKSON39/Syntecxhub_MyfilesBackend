import express from 'express';
import { connectDB, getDB } from './config/db.config.js';
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import path from "path";
import mongoose from 'mongoose';


const app = express();

app.use(express.json());

await connectDB();

app.get('/', (req, res) => {
  res.send('Good Morning World! 🚀');
});

const PORT = process.env.PORT || 5000;

getDB();

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/uploads", express.static("uploads"));





const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Mongo connected');
    
    app.listen(PORT, ()=> {
      console.log(`Server is running on ${PORT}`)
    });
  } catch (err) {
    console.error(err);
    process.exit(1)

  }
}
startServer();
