import mongoose from "mongoose";

const connect=async()=>{
try {
       mongoose.set('strictQuery',false);
       await mongoose.connect(process.env.MONGOO_URL).then(()=>{
              console.log('DB connection is succesfully')
       }).catch((err)=>{console.log(err)})
       
               
} 
catch (error) {
          throw new Error('connection failed')    
}
}
export default connect;