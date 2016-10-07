var docClient = require('./db').docClient;

console.log("Querying for sozai .");

var params = {
  TableName: "Sozai",
  KeyConditionExpression: "#sozaiId > :yyyy",
  ExpressionAttributeNames: {
    "#sozaiId": "sozaiId"
  },
  ExpressionAttributeValues: {
    ":yyyy": 0
  }
};

docClient.query(params, function(err, data) {
  if (err) {
    console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
  } else {
    console.log("Query succeeded.");
    data.Items.forEach(function(item) {
      console.log(" -", JSON.stringify(item, null, 2));
    });
  }
});