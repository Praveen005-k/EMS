import express from 'express'
import cors from 'cors'

import router from './routes/auth.js'
import departmentRouter from './routes/department.js'

import connDB from './configDBs/db.js'

connDB()
const app = express();
app.use(cors());
app.use(express.json())
app.use('/api/auth', router)
app.use('/api/department', departmentRouter)



app.listen(process.env.PORT, ()=>{
    console.log(`server is running ${process.env.PORT}`);
    
})