import express from 'express';

import todoRouters from './routes/todos.js'

const PORT=3000;

const app=express();

app.use(express.json());

app.use('/todos',todoRouters);

app.use((err:Error,req:express.Request,res:express.Response,next:express.NextFunction)=>{
    res.status(500).json({err:err.message})
})

app.listen(PORT,()=>{
    console.log(`App run on port : ${PORT}`)
})