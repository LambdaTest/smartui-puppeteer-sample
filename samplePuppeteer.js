const puppeteer = require("puppeteer");
const expect = require("chai").expect;
let browser, page;

(async () => {
  const capabilities = {
    "browserName": "Chrome",
    "browserVersion": "latest",
    "LT:Options": {
      "platform": "Windows 10",
      "build": "Puppeteer SmartUI Build",
      "name": "Puppeteer SmartUI Test",
      "user": process.env.LT_USERNAME || '<your username>',
      "accessKey": process.env.LT_ACCESS_KEY || '<your access key>',
      "network": true,
      "video": true,
      "console": true,
      "smartUIProjectName": "SmartUI_Puppetteer_sample", // Add the required Smart UI Project name
    },
  };

  
    browser = await puppeteer.connect({
      browserWSEndpoint: `wss://cdp.lambdatest.com/puppeteer?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
    });

    
    const page = await browser.newPage()
    await page.goto('https://www.bing.com')

  // Add the following command in order to take screenshot in SmartUI
  await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: true, screenshotName: 'search-lambdatest' }
    })}`) // Add a relevant screenshot name here

  const element = await page.$('[id="sb_form_q"]')
  await element.click()
  await element.type('LambdaTest')
  await page.waitForTimeout(3000)
  await page.keyboard.press('Enter')
  await page.waitForSelector('[class=" b_active"]')
  const title = await page.title()

  try {
    expect(title).toEqual('LambdaTest - Search')
    // Mark the test as completed or failed
    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'passed', remark: 'Title matched' } })}`)
  } catch {
    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'failed', remark: 'Title not matched' } })}`)
  }

  await page.goto("https://www.lambdatest.com")

  await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: true, screenshotName: 'lambdatest-website' }
    })}`) 
  await page.goto("https://www.lambdatest.com/support/api-doc/")

  await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: true, screenshotName: 'api-doc' }
    })}`) 

    await browser.close()

})();
