exports = function(payload, response){
  
  const {userid} = payload.query;
  const {password} = payload.query;
  
  let userList = [];
  
  if (userid && password){
    
    let query = { $and: [ {"User.userid": {$eq : userid}}, {"User.Password": {$eq : password}}]} 
    
    const doc = context.services.get("mongodb-atlas").db("MovieStarDB").collection("users");
    userList = doc.find( query , {"User.Password":0} );
  
  }

return userList;

};