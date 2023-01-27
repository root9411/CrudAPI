require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT | 5000
const connectDB = require('./db.js')
const employeeRoutes = require('./routes/user')


const app = express();

app.use(bodyParser.json())

app.use('/api/employee',employeeRoutes)

const start = async()=>{
    try{
        await connectDB();
        app.listen(PORT,()=>{
            console.log(`Port is Runnning on PORT No: ${PORT}`);
        })
    }catch(error){
        console.log(error);
    }
}

start();