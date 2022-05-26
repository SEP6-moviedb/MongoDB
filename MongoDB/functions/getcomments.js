exports = function(payload, response){
  
  const {movieid} = payload.query;
  
  let query = {};
  if (movieid){
    query = {"Usercomment.movieid": {$eq : movieid}
      
} }

  const doc = context.services.get("mongodb-atlas").db("MovieStarDB").collection("comments");
  let commentList = doc.find(query)

  
return commentList;
};