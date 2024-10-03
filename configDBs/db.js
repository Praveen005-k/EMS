import mongoose from 'mongoose'


const connDB = async ()=>{

    try {
        
        await mongoose.connect("mongodb://localhost:27017/ems");
    //   await  mongoose.connect(process.env.MONGODB_URL, {
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true,
    //         useCreateIndex: true
    //     })
    //         .then(() => {
    //             console.log('successfully connected');
    //         })
    //         .catch((e) => {
    //             console.log('not connected');
    //         })
    } catch (error) {
        console.log(error);
        
    }
}

export default connDB ;