const NodeGeocoder = require('node-geocoder');

const options = {
  provider: process.env.GEOC0DER_PROVIDER,
  httpAdapter: 'https',
  apiKey: process.env.GEOCODER_KEY,
  formatter: null,
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;
