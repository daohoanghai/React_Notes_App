const config = {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: 'ap-northeast-1',
    BUCKET: 'hai-notes-app-bucket',
  },
  apiGateway: {
    REGION: 'ap-northeast-1',
    URL: 'https://13ulh5at4d.execute-api.ap-northeast-1.amazonaws.com/prod',
  },
  cognito: {
    REGION: 'ap-northeast-1',
    USER_POOL_ID: 'ap-northeast-1_xPY3Kk4l3',
    APP_CLIENT_ID: '60l1igjprjp2ospg07kelpgrtj',
    IDENTITY_POOL_ID: 'ap-northeast-1:ebec81b4-5a79-4e99-90b1-66221cba5e15',
  },
  STRIPE_KEY:
    'pk_test_51J0eyZKe7AAKIoSDZWmPMKRUQvDy49zS2Ru1W4eDCgl7gj3C2gMNuxwLn6JKwpuVRD4RNVXLb7TnlMivNkjT5XiG00qpHQwkOa',
};

export default config;
