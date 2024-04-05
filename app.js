const express = require('express')
const app=express()
const PORT = 3500
const userRouter=require('./routes/userRouter')

app.get('/',(request,response)=>
{
    response.status(200).send({"message":'hello World'})
})
app.use(express.json())

app.use('/api/v1/users/',userRouter)

app.listen(PORT,console.log(`server system started running at http://localhost:${PORT}`))