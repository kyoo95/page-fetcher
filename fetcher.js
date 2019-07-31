const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);
const url = args[0];
const path = args[1];

const download = function(url, path) {
  request(url, (error, response, body) => {  
    fs.writeFile(path, body, (error) => {
      if (error) throw error;
      console.log('Downloaded and saved');
    });
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  });
};

download(url, path);
