import express from 'express';
import { connectDB, getDB } from './config/db.config.js';
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import path from "path";
import filesUpload from './routes/fileRoutes.js'
import mongoose from 'mongoose';
import cors from 'cors';
import jobsRoutes from './routes/jobs.routes.js'
import hotelRoutes from './routes/hotel.routes.js'
import morgan from 'morgan';

const app = express();

app.use(express.json());
app.use(cors());

app.use(morgan('dev'));

app.use((req,res,next)=> {
  console.log(`[Request] ${req.method} ${req.url}`)
  next()
})


await connectDB();

app.get('/', (req, res) => {
  res.send('Good Morning World! 🚀');
});

const PORT = process.env.PORT || 5000;

getDB();

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/uploads", express.static("uploads"));
app.use('/upload',filesUpload)
app.use('/api/jobs',jobsRoutes)
app.use('/api/hotel',hotelRoutes);




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

