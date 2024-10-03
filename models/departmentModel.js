
import mongoose from 'mongoose'


const depatSchema =  new mongoose.Schema({
    dep_name : { type : String, required: true},
    description : { type : String},

})

const Department = mongoose.model('Department', depatSchema);
export default Department ;