var docClient = require('./db').docClient;

var table = "Sozai";

var sozaiId = 10002;

var version = 2;

var params = {
	TableName: table,
	Key: {
		"sozaiId": sozaiId
	},
	UpdateExpression: "set version = version + :val",
	ConditionExpression: " version = :ver AND attribute_exists(sozaiId)",
	ExpressionAttributeValues: {
		":ver": version,
		":val": 1
	},
	ReturnValues: "UPDATED_NEW"
};

console.log("updateing the item ...");
docClient.update(params, function(err, data) {
	if (err) {
		console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
	} else {
		console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
	}
});