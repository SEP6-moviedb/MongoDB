exports = async function (request, response) {
  // 1. Parse the incoming request
  const bodyJson = JSON.parse(request.body.text());
  // 2. Run the endpoint logic
  await context.services
    .get("mongodb-atlas")
    .db("MovieStarDB")
    .collection("comments")
    .insertMany([{ timestamp: new Date(), Usercomment: {
      movieid: bodyJson.movieid.toString(),
      comment: bodyJson.comment.toString(),
      username: bodyJson.username.toString()
      
    }}]); 
  // 3. Configure the response
  response.setBody("Request was successful");
} 

