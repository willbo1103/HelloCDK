const { Stack, Duration } = require("aws-cdk-lib");
const {
  RestApi,
  MockIntegration,
  PassthroughBehavior,
} = require("aws-cdk-lib/aws-apigateway");
const { Bucket } = require("aws-cdk-lib/aws-s3");
// const sqs = require('aws-cdk-lib/aws-sqs');

class HelloCdkStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    const api = new RestApi(this, "MyApi", {
      restApiName: "My API",
    });

    const studentResource = api.root.addResource("student");
    studentResource.addMethod(
      "GET",
      new MockIntegration({
        integrationResponses: [
          {
            statusCode: "200",
            responseTemplates: {
              "application/json": ` 
                     { "name": "Will",
                       "surname": "Bo", 
                     }`,
            },
          },
        ],
        passthroughBehavior: PassthroughBehavior.NEVER,
        requestTemplates: {
          "application/json": '{ "statusCode": 200 }',
          "text/html": '{ "statusCode": 200 }',
        },
      }),
      {
        methodResponses: [{ statusCode: "200" }],
      }
    );

    new Bucket(this, "MyFirstBucket", {
      versioned: true,
      bucketName: "will.bucket",
    });
  }
}

module.exports = { HelloCdkStack };
