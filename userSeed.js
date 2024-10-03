import connDB from "./configDBs/db.js";
import User from "./models/User.js";
import bcry from 'bcrypt'



const userRegister = async ()=>{
    connDB();
    try {

        const hashPassword = await bcry.hash('admin', 10)
        const newUser = new User({
            name : "Admin",
            email : "admin@gmail.com",
            password : hashPassword,
            role : "admin"
        })

        await newUser.save();
    } catch (error) {
        console.log(error);
        
    }
}

userRegister();