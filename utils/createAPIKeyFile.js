const fs = require('fs')

const obj = {
  "type": "service_account",
  "private_key_id": process.env.PRIVATE_KEY_ID,
  "private_key": process.env.PRIVATE_KEY,
  "client_email": process.env.CLIENT_EMAIL,
  "client_id":process.env.CLIENT_ID,
  "auth_uri": process.env.AUTH_URI,
  "token_uri":  process.env.TOKEN_URI,
  "auth_provider_x509_cert_url": process.env.PROVIDER_CERT,
  "client_x509_cert_url": process.env.CLIENT_CERT,
}

const createAPIKeyFile = () => {
  const data = JSON.stringify(obj);
  fs.writeFileSync('APIkey.json', data);
}

export default createAPIKeyFile;