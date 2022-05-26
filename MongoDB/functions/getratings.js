// This function is the endpoint's request handler.
exports = function({ query, headers, body}, response) {
     const doc = context.services.get("mongodb-atlas").db("MovieStarDB").collection("ratings").find();
     return  doc;
   
   
   
};


