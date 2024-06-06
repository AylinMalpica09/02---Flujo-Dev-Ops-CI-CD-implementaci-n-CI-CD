import express from 'express';
const app = express();

app.use(express.json())

app.get('/prueba',(req, res)=>{
    res.status(200).send({
        status:"success",
        message:"Hello World with docker XD 2"
    })
})


app.listen(3000,()=>{
    console.log("server started in port 3000")
})