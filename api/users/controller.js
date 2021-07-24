const { create } = require("../users/services")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require("dotenv").config()
exports.createuser = (req, res) => {
    try {
        let saltRounds = process.env.SALTROUNDS
        saltRounds = Number.parseInt(saltRounds)
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if (salt) {
                const { user_id, username, password } = req.body;
                bcrypt.hash(password, salt, (err, hashedPassword) => {
                    if (err) {
                        return res.send(500).send({
                            success: false,
                            message: "Can't hash Password",
                            error: err.message,
                            token: null
                        })
                    }
                    create({user_id,username,hashedPassword},(err,results)=>{
        
                        if(err){
                            console.log(err);
                            return res.status(500).json({
                                sucess:0,
                                message:"database connection error"
                            })
                        }else{
                        var token=jwt.sign({
                            user:results
                        },process.env.SECRET,{
                            expiresIn:'7d'
                        })  
                        return res.status(200).send({
                            success: true,
                            message: 'Enjoy your token',
                            token: token,
                            error: null
                        })     
                    }         
                    })
                })
              
               
            }
        })
    }catch (error) {

        res.status(500).send({
            message: "An error ocurred",
            error: error.message,
            token: null,
            success: false
        })

    }

    
    
    
}

