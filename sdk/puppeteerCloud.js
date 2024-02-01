const puppeteer = require("puppeteer");
let browser, page;
const {smartuiSnapshot} = require('@lambdatest/puppeteer-driver');
const USERNAME = process.env.LT_USERNAME || "<USERNAME>";

// AccessKey:  AccessKey can be generated from automation dashboard or profile section
const KEY = process.env.LT_ACCESS_KEY || "<ACCESS_KEY>";
(async () => {
  const capabilities = {
    "browserName": "Chrome",
    "browserVersion": "latest",
    "LT:Options": {
      "platform": "Windows 10",
      "build": "Puppeteer SmartUI Build",
      "name": "Puppeteer SmartUI Test",
      "user": USERNAME,
      "accessKey": KEY,
      "network": true,
      "video": true,
      "console": true,
    },
  };
    browser = await puppeteer.connect({
      browserWSEndpoint: `wss://cdp.lambdatest.com/puppeteer?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
    });
    const page = await browser.newPage()
    await page.goto('https://www.lambdatest.com')
  // Add the following command in order to take screenshot in SmartUI/ Add a relevant screenshot name here
  await smartuiSnapshot(page, "LT-Home");
 // await smartuiSnapshot(page, this.test.fullTitle());
    await browser.close()
})();