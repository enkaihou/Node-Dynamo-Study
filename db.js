var AWS = require("aws-sdk");

AWS.config.update({
	accessKeyId: 'AAAAAAAAAAAAAAAAAAAA',
	secretAccessKey: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
	region: "us-west-2",
	endpoint: "http://localhost:8000"
});

var dynamodb = new AWS.DynamoDB();

var docClient = new AWS.DynamoDB.DocumentClient();

module.exports = {
	dynamodb,
	docClient
};