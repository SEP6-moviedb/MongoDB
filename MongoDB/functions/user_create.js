exports = async function (request, response) {
  // 1. Parse the incoming request
  const bodyJson = JSON.parse(request.body.text());

		 // 2. Run the endpoint logic
	result = await context.services
    .get("mongodb-atlas")
    .db("MovieStarDB")
    .collection("users").updateOne(
   { $or: [{"User.username": bodyJson.userName.toString()}, {"User.userid": bodyJson.userId.toString()}] }, //do NOT insert new user if username OR userid already exists
   { $setOnInsert: { "User.username" : bodyJson.userName.toString(), //"displayname" from angular
                      "User.userid" : bodyJson.userId.toString(), //email ("username" from angular)
                      "User.Password" : bodyJson.password.toString(), 
   } },
   { upsert: true }
)
  // 3. Configure the response
 response.setBody(JSON.stringify(result)); 
} 
