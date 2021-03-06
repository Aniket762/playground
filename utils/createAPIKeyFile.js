const fs = require('fs')

const createAPIKeyFile = () => {
  let obj = {
    "type": "service_account",
    "project_id": "dazzling-seat-293205",
    "private_key_id": process.env.PRIVATE_KEY_ID,
    "private_key": (process.env.PRIVATE_KEY),
    "client_email": process.env.CLIENT_EMAIL,
    "client_id":process.env.CLIENT_ID,
    "auth_uri": process.env.AUTH_URI,
    "token_uri":  process.env.TOKEN_URI,
    "auth_provider_x509_cert_url": process.env.PROVIDER_CERT,
    "client_x509_cert_url": process.env.CLIENT_CERT,
  }

  // console.log(obj.private_key);

  const data = JSON.stringify(obj);
  fs.writeFileSync('./utils/APIKey.json', data);
}

module.exports = { createAPIKeyFile };
