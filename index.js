const express= require("express")
const dotenv =require("dotenv")
const userrouter=require("./api/users/routes")
dotenv.config()

const app=express()
app.use(express.json())
app.use("/api",userrouter)


try{
    app.listen(process.env.APP_PORT,()=>{
        console.log(`server started on ${process.env.APP_PORT}.visit http://localhost:${process.env.APP_PORT}`)
    })
}catch(err){
    console.log("error while creating server")

}
