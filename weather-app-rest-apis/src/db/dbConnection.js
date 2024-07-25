const mongoose = require('mongoose');


const connectDb =async ()=>{
    try {
        await mongoose.connect(process.env.DB_URL,{dbName:"weather-app"})
        console.log('Db connected sucessfully')
    } catch (error) {
        console.log('error coonecting db',error)
    }
}
module.exports = connectDb;