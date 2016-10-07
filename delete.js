var docClient = require('./db').docClient;

var table = "Sozai";

var sozaiId = 10001;

var params = {
	TableName: table,
	Key: {
		"sozaiId": sozaiId
	}
};

docClient.delete(params, function(err, data) {
	if (err) {
		console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
	} else {
		console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
	}
});