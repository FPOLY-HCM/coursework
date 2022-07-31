import { Web3Storage } from 'web3.storage';

function getAccessToken() {
  return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDM1Q0QwOTg1QTI3NDQyNjRmQUYxOUE2MTBGZDk3NEQyMEJGNDdkNmUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTkwNjI4NDA1NTUsIm5hbWUiOiJEZmluaXR5In0.NaUBb8JK2wH6E03lA3_ijquxDleKJanw1RNcoygPJ7A';
  //   return process.env.WEB3STORAGE_TOKEN
}

function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() });
}

export { makeStorageClient };
