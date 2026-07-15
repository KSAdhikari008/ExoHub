import { app } from './app.js';
import { connectDB } from './db/index.js';
import dotenv from 'dotenv/config';

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log("Server is live at port: ",process.env.PORT || 8000);
    })
})
.catch(err => {
    console.log("Server connection error: ",err);
})