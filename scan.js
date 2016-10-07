var docClient = require('./db').docClient;

var params = {
  TableName: "Sozai"
  // ProjectionExpression: "sozaiId, sozaiName",
};

console.log("Scanning Sozai table.");
docClient.scan(params, onScan);

function onScan(err, data) {
  if (err) {
    console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
  } else {
    // print all the movies
    console.log("Scan succeeded.");
    data.Items.forEach(function(sozai) {
      console.log(
        sozai.sozaiId + ": ",
        sozai.sozaiName + ": ",
        sozai.version);
    });

    // continue scanning if we have more movies
    if (typeof data.LastEvaluatedKey != "undefined") {
      console.log("Scanning for more...");
      params.ExclusiveStartKey = data.LastEvaluatedKey;
      docClient.scan(params, onScan);
    }
  }
}