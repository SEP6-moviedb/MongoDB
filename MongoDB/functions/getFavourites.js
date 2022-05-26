exports = function(payload, response){
  
  const {userid} = payload.query;
  
  let query = {};
  if (userid){
    query = {"favourite.userid": {$eq : userid}
      
} }

  const doc = context.services.get("mongodb-atlas").db("MovieStarDB").collection("favourites");
  let commentList = doc.find(query)

  
return commentList;
};