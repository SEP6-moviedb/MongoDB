// This function is the endpoint's request handler.
exports = function({ query, headers, body}, response) {
     const doc = context.services.get("mongodb-atlas").db("BookStore").collection("books").aggregate(
[
{$unwind: "$genres"},
{$group:{ 
         _id: "$genres",
          "avgPageCount": {$avg: "$pageCount"}}},
{$addFields: {avgPageCount: { $toInt: "$avgPageCount" }}}
]


)
    return  doc;
};
