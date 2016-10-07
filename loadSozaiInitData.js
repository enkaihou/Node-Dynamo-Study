var docClient = require('./db').docClient;
var sozais = require('./initSozai.json');

console.log("Importing Sozai into DynamoDB. Please wait.");

sozais.forEach(function(sozai) {
  var params = {
    TableName: 'Sozai',
    Item: {
      "infoKind": sozai.infoKind,
      "sozaiId": sozai.sozaiId,
      "sozaiKind": sozai.sozaiKind,
      "kariMidashi": sozai.kariMidashi,
      "honbun": sozai.honbun,
      "sozaiName": sozai.sozaiName,
      "updateUser": sozai.updateUser,
      "version": sozai.version
    }
  };

  docClient.put(params, function(err, data) {
    if (err) {
      console.error("Unable to add sozai", sozai.sozaiId, ". Error JSON:", JSON.stringify(err, null, 2));
    } else {
      console.log("PutItem succeeded:", sozai.sozaiId);
    }
  });

});