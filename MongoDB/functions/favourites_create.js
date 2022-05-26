exports = async function (request, response) {
  // 1. Parse the incoming request
  const bodyJson = JSON.parse(request.body.text());
  // 2. Run the endpoint logic
  await context.services
    .get("mongodb-atlas")
    .db("MovieStarDB")
    .collection("favourites")
    .insertOne({ favourite: {
      movieid: bodyJson.movieid.toString(),
      userid: bodyJson.userid.toString(),
      moviename: bodyJson.moviename.toString()
      
    }});
  // 3. Configure the response
  response.setBody("Request was successful");
} 

