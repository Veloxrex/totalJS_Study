exports.id = 'dynamo';

var dynamoose = require('dynamoose');

dynamoose.AWS.config.update(
    {
        region: 'ap-southeast-1'
    }
);

dynamoose.local();

exports.driver = dynamoose;

exports.verson = '0.0.1';