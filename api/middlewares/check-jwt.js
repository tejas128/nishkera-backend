const jwt=require('jsonwebtoken')
require('dotenv').config()

module.exports=function(req,res,next){
    let token=req.header('Authorization').replace('Bearer ','')
    try{

        if(token){
            jwt.verify(token,process.env.SECRET , function(err,decoded){
                if(err){
                    res.status(401).json({
                        success:false,
                        message:'failed to authenticat token',
                        error:err
                    });
    
                }else{
                    req.decoded=decoded
                    next()
                }
            })
        }else{
            res.status(401).json({
                success:false,
                message: 'no token provided'
            })
        }
    }
    catch(err){
        res.status(401).json({
            success:false,
            message:"please login or signup",
            error:err
        })
    }
}