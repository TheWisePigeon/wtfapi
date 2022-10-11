import mongoose from "mongoose";


const connectToDB =async () => {    
    mongoose.connect(
        process.env.NODE_ENV !="dev"? process.env.DB_URL as string : "mongodb://localhost:27017/wtfapi" 
    ).then(()=>{
        console.log("Connected to database");
        
    }).catch((err)=>{
        console.log(`Somethin ain't right ${err}`);
    })
}

export {
    connectToDB
}