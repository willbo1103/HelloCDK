const { Stack, Duration } = require('aws-cdk-lib');
const { RestApi, MockIntegration, PassthroughBehavior } = require('aws-cdk-lib/aws-apigateway');
const { Bucket } = require('aws-cdk-lib/aws-s3');
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

    const api = new RestApi(this, 'MyApi', {
      restApiName: 'My API',
    });

    const studentResource = api.root.addResource("student");
    studentResource.addMethod("GET", new MockIntegration({
      integrationResponses: [
        { statusCode: '200' },
      ],
      passthroughBehavior: PassthroughBehavior.NEVER,
      requestTemplates: {
        'application/json': '{ "statusCode": 200 }',
      },
    }));

    new Bucket(this, 'MyFirstBucket', {
      versioned: true,
      bucketName: 'will.bucket'
    });

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'HelloCdkQueue', {
    //   visibilityTimeout: Duration.seconds(300)
    // });
  }
}

module.exports = { HelloCdkStack }
