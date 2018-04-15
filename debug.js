// ===================================================
// FOR DEVELOPMENT
// Total.js - framework for Node.js platform
// https://www.totaljs.com
// ===================================================
process.env. AWS_ACCESS_KEY_ID="AKIAIDEQCUC64MZMUM6Q";
process.env. AWS_SECRET_ACCESS_KEY="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";
const options = {
    port: 4300
};

// options.ip = '127.0.0.1';
// options.port = parseInt(process.argv[2]);
// options.config = { name: 'Total.js' };
// options.sleep = 3000;
// options.inspector = 9229;
// options.watch = ['private'];

require('total.js/debug')(options);