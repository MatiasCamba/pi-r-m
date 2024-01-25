const users= require("../utils/users")

const login = (req,res) =>{

 const { email, password} = req.query;

 const loginValid = users.find((user)=> user.email == email && user.password == password);

 //return loginValid ? res.status(200).json({access:true}) : res.status(404).json({access:false});
if(loginValid){
   return res.status(200).json({access:true })
}else{
    res.status(404).json({access:false})
}
}


module.exports= login;