const { Stack, Duration } = require("aws-cdk-lib");
const { Bucket } = require("aws-cdk-lib/aws-s3");

class HelloCdkStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    new Bucket(this, "MyFirstBucket", {
      versioned: true,
      bucketName: "will.bucket",
    });
  }
}

module.exports = { HelloCdkStack };
