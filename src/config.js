const config = {
  s3: {
    REGION: 'YOUR_S3_UPLOADS_BUCKET_REGION',
    BUCKET: 'YOUR_S3_UPLOADS_BUCKET_NAME',
  },
  apiGateway: {
    REGION: 'YOUR_API_GATEWAY_REGION',
    URL: 'YOUR_API_GATEWAY_URL',
  },
  cognito: {
    REGION: 'ap-southeast-1',
    USER_POOL_ID: 'ap-southeast-1_shbaqwQz2',
    APP_CLIENT_ID: '41s7bhjb49q7122k43vlvsfj70',
    IDENTITY_POOL_ID: 'ap-southeast-1:0267a27a-914b-4161-96f0-b9c6f9ea64d5',
  },
};

export default config;
