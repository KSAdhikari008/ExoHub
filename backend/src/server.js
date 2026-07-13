import express from 'express'
import 'dotenv/config'

const app = express();
const port = process.env.PORT;

app.get('/',(req,res)=>{
    res.send('HOME PAGE ExpoHub');
})

app.get('/api/users',(req,res)=>{
    res.send([
        {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com'
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'jane.smith@example.com'
        },
        {
            id: 3,
            name: 'Alice Johnson',
            email: 'alice.johnson@example.com'
        },
        {
            id: 4,
            name: 'Bob Brown',
            email: 'bob.brown@example.com'
        }
    ])
})

app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`);
})