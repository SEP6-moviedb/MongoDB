exports = function(payload, response){
  
  const {movieid} = payload.query;
  
  let query = {};
  if (movieid){
    query = {"_id": {$eq : movieid}
      
} }

  const doc = context.services.get("mongodb-atlas").db("MovieStarDB").collection("ratings").aggregate(
[ 
 {$group: { 
           _id: "$userrating.movieid",
          "userRatingAvg": {$avg: "$userrating.rating"},
          "userRatingCount": { $count: { } }
 },
   
 },
          {$match : query}
]
);

  
return doc;
};