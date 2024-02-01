const puppeteer = require("puppeteer");
const { smartuiSnapshot } = require('@lambdatest/puppeteer-driver'); 

(async () => {
  // Launch a browser instance locally
  const browser = await puppeteer.launch({
    headless: false, // Set to false to see the UI
    args: ['--start-maximized'], // Start browser maximized, remove if not needed
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 }); // Set viewport size as needed

  // Navigate to the desired URL
  await page.goto('https://www.lambdatest.com');

  // Take a screenshot with Smart UI. Replace "LT-Home" with a relevant name for your use case
  await smartuiSnapshot(page, "LT-Home");

  // Close the browser
  await browser.close();
})();
