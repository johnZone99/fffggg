const https = require("https");

const keepAliveRequest = () => {
  const url = "https://real-estate-demo-gi5x.onrender.com/api/listings/get/1";

  https
    .get(url, (res) => {
      console.log(
        `Keep-alive request to ${url} status code: ${res.statusCode}`
      );
    })
    .on("error", (err) => {
      console.error(`Error: ${err.message}`);
    });
};

// Execute the keep-alive request
keepAliveRequest();
