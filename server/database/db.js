import mongoose from 'mongoose';

const DBConnection = async () =>{
    const MONGODB_URL = `mongodb+srv://sakshiS:7_R3G_XiH6kEkQR@file-sharing.f2bydwt.mongodb.net/?retryWrites=true&w=majority`;

    try{
        await mongoose.connect(MONGODB_URL, {useNewUrlParser: true});
        console.log("Database connected successfully!");
    }
    catch(error){
        console.error("Error while connecting with the databse", error.message);
    }
}

export default DBConnection;