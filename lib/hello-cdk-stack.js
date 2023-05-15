const { Stack, Duration } = require('aws-cdk-lib');
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
