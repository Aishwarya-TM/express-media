const userData=require('../data/userData')
const getAllUserData=(request,response)=>
{
    response.status(200).send(userData)
}


module.exports={getAllUserData}