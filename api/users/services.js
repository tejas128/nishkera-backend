const pool=require("../../config/db")

module.exports={
    create:(data , callback)=>{
        
        pool.query(
            `insert into users(user_id,username,password)values(?,?,?)`,[
                data.user_id,
                data.username,
                data.hashedPassword
            ],(err,results,fields)=>{ 
                if(err){
                  return console.log(err)
                }
                console.log(results)
                 return callback(null,results)

            }
        )
    }
}