var dynamodb = require('./db').dynamodb;

var params = {
	TableName: "Sozai",
	KeySchema: [{
			AttributeName: "sozaiId",
			KeyType: "HASH"
		} //Sort key
	],
	AttributeDefinitions: [{
		AttributeName: "sozaiId",
		AttributeType: "N"
	}],
	ProvisionedThroughput: {
		ReadCapacityUnits: 10,
		WriteCapacityUnits: 10
	}
};

dynamodb.createTable(params, function(err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});