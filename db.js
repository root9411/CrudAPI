require('dotenv').config();
const mongoose = require('mongoose')

const dataURL = 'mongodb+srv://Ayan_admin:123@mini-mern.xhf1kju.mongodb.net/curd?retryWrites=true&w=majority'

const connectDB = async()=>{
    try{
        mongoose.set("strictQuery", false);
        await mongoose.connect(dataURL,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Database Connected")
    }catch(error){
        console.log("DataBase Not Connected")
        process.exit(1)
    }
}

module.exports = connectDB;