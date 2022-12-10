import express from 'express';
import mongoose from 'mongoose';
import { routes } from './routes.js';

const app = express();

app.use(express.json());

const databaseUrl = 'mongodb+srv://eduonix:Eduonix123@cluster0.ojryh6q.mongodb.net/customer';
mongoose.connect(databaseUrl);
const database = mongoose.connection;

database.on('error',(error)=>{
  console.log("Error while connecting to database");
})

database.once('connected',()=>{
  console.log("Connected to database successfully");
})

app.use(routes)

app.get('/healthcheck',(req,res)=>{
  res.status(200).send("Server is up and running..!!");
})

app.listen(5000,()=>{
  console.log("Server is running on port 5000");
})