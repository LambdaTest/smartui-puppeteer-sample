# LambdaTest SmartUI Puppeteer Samples for SDK & Lambdatest Hooks

This project demonstrates how to use Puppeteer and LambdaTest together to run automated tests on the LambdaTest platform.

## Setup

First, clone this repository to your local machine.

```bash
git clone https://github.com/LambdaTest/smartui-puppeteer-sample.git
cd smartui-puppeteer-sample
```

You'll need to set your LambdaTest username and access key as environment variables. They can be found on your LambdaTest profile.

```bash
export LT_USERNAME="Your LambdaTest Username"
export LT_ACCESS_KEY="Your LambdaTest Access Key"
```

## Sample with Lambdatest SDK:

### About the Test

The test navigates to the LambdaTest homepage and checks the page title. After the title check, it will take a full-page screenshot for visual regression testing.

#### Setting up your environment

You can find the samples for `Lambdatest SDK` in the `sdk` folder: 
```bash
cd sdk
```

### About SmartUI Webhook

LambdaTest's SmartUI uses a SDK function to call the `smartuiSnapshot` function. This function captures a screenshot of the full page and uses it for visual regression testing. 

```javascript
const {smartuiSnapshot} = require('@lambdatest/puppeteer-driver');
```
Here's an example of how to use the `smartuiSnapshot` function:

```javascript
await smartuiSnapshot(page, "<Your Screenshot Name>");
```

Replace `<Your Screenshot Name>` with a relevant name for the screenshot. The screenshot will be saved with this name in the LambdaTest platform, and you can use it for comparing the UI changes over time.

### Running tests
You, can run the execution on your `local` machines or `Lambdatest Automation` grid, you can select the samples as per below: 

For local execution: 
```bash
npm run smartui-local
```

For `Lambdatest Automation Cloud` grid: 
```bash
npm run smartui-cloud
```
For more information about the `SDK` features and help, please visit the our docs at [https://staging.lambdatestinternal.com/support/docs/smartui-playwright-sdk/](https://staging.lambdatestinternal.com/support/docs/smartui-playwright-sdk/)

## Sample with Lambdatest Hooks:

### About the Test

The test navigates to the LambdaTest homepage and checks the page title. After the title check, it will take a full-page screenshot for visual regression testing.

#### Setting up your environment

You can find the samples for `Lambdatest Hooks` in the `hooks` folder: 
```bash
cd hooks
```
Next, install the necessary dependencies:

```bash
npm i
```

### About SmartUI Webhook

LambdaTest's SmartUI uses a webhook to call the `smartui.takeScreenshot` function. This function captures a screenshot of the full page and uses it for visual regression testing. The function is called using the `page.evaluate` method with the `lambdatest_action` parameter.

Here's an example of how to use the `smartui.takeScreenshot` function:

```javascript
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: true, screenshotName: '<Your_Screenshot_Name>' }
    })}`)
```

Replace `<Your Screenshot Name>` with a relevant name for the screenshot. The screenshot will be saved with this name in the LambdaTest platform, and you can use it for comparing the UI changes over time.

### Running Tests

You can now run the tests on the `Lambdatest Automation` grid using the following command: 

```bash
npm run single
```
## Support

For additional support, please don't hesitate to reach out to our `24/7` support team is happy to help you at [support@example.com](mailto:support@example.com)

