exports = async function (request, response) {
  // 1. Parse the incoming request
  const bodyJson = JSON.parse(request.body.text());
  //const bodyJson = JSON.stringify(request.body.text());

	
	
		 // 2. Run the endpoint logic
  await context.services
    .get("mongodb-atlas")
    .db("MovieStarDB")
    .collection("ratings").updateMany(
   { "userrating.movieid": bodyJson.movieId.toString(), 
     "userrating.userid": bodyJson.userId.toString()
    },
   { $set: { timestamp: new Date(), userrating : {
           movieid:bodyJson.movieId.toString(), 
           rating: parseInt(bodyJson.rating), 
           userid: bodyJson.userId.toString() }} },
   { upsert: true }
);


           
               
         
  // 3. Configure the response
  response.setBody("Request was successful");
} 

//.update_one({'thing':'apple'}, {'$set':{'color':'red'}}, upsert=True)