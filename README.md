# TestMu AI SmartUI: Puppeteer Samples with SDK & TestMu AI Hooks — TestMu AI (Formerly LambdaTest)

Welcome to the TestMu AI SmartUI Puppeteer samples repository. This guide provides detailed instructions on integrating Puppeteer with TestMu AI for automated, cloud-based testing, including visual regression testing using SmartUI. Discover how to leverage the power of Puppeteer alongside TestMu AI's extensive testing capabilities to ensure your web applications look and perform their best across a wide range of devices and browsers.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following:
- An active TestMu AI account. [Sign up here](https://www.testmuai.com/) if you don't have one.
- Your TestMu AI Username and Access Key, available in your TestMu AI profile.

### Initial Setup

Clone this repository to get started with SmartUI tests using Puppeteer:

```bash
git clone https://github.com/LambdaTest/smartui-puppeteer-sample.git
cd smartui-puppeteer-sample
```

Configure your environment with your TestMu AI credentials:

```bash
export LT_USERNAME="Your LambdaTest Username"
export LT_ACCESS_KEY="Your LambdaTest Access Key"
```
### Settings up SmartUI project

You, need to create a `SmartUI` project at [TestMu AI - SmartUI Web App](https://smartui.lambdatest.com/projects). Now, you need to follow the steps below: 
1. Click on the `New Project` button on the top right of the webpage.
2. Select your `Platform type` as `SDK` for running `SDK` sample test below, else you can select `Platform type` as `Web` for running `hooks` sample.
3. Provide name of your choice for the project.
4. Now, add `Approvers` who are required to review the changes and approve/reject the results of the tests.
5. (Optional) You can add `tags` of your choice such as `uat`, `dev` etc..
6. Click on the `Get Started` button for completing the project creation.
7. Now, select `NodeJS` setup guide and in the `Step 2` you can find the project token.

### Setting up Project token: 
Once, you have successfully setup the project for the `SmartUI` and copiec the `Project Token` from the `SmartUI Web App`: 

```bash
export PROJECT_TOKEN="<Your Copied Project Token to be pasted here>" 
```

## Testing with TestMu AI SDK

### Overview

Our sample tests demonstrate navigating to the TestMu AI homepage to verify the page title and conducting a full-page screenshot for visual regression testing.

#### Setup

Navigate to the SDK sample directory and install dependencies:

```bash
cd sdk
npm install
```

#### Using SmartUI with Puppeteer

TestMu AI's SmartUI SDK enhances your testing with automated visual regression capabilities. Here's how to capture a full-page screenshot:

```javascript
const { smartuiSnapshot } = require('@lambdatest/puppeteer-driver');

await smartuiSnapshot(page, "Your_Screenshot_Name");
```

Replace `"Your_Screenshot_Name"` with a meaningful identifier. Screenshots are stored in TestMu AI for seamless UI comparison over time.

### Execution

Execute tests locally or on the TestMu AI Automation Cloud grid:

- For local execution:
  ```bash
  npm run smartui-local
  ```

- For execution on TestMu AI Automation Cloud:
  ```bash
  npm run smartui-cloud
  ```

Visit our [documentation](https://www.testmuai.com/support/docs/smartui-puppeteer-sdk/) for comprehensive SDK guides and tutorials.

## Testing with TestMu AI Hooks

### Overview

Like the SDK samples, these tests navigate to the TestMu AI homepage for title verification and visual regression via screenshot.

#### Setup

Access the Hooks sample directory and prepare your environment:

```bash
cd hooks
npm install
```

#### Leveraging SmartUI Webhooks

Use TestMu AI's webhook for seamless visual regression testing. Capture a screenshot with:

```javascript
await page.evaluate(() => {
  // Replace "Your_Screenshot_Name" with the screenshot identifier
  const screenshotName = "Your_Screenshot_Name";
  const lambdatestAction = JSON.stringify({
    action: 'smartui.takeScreenshot',
    arguments: { fullPage: true, screenshotName }
  });
  // Execute the SmartUI action
});
```

### Running the Tests

Deploy your tests on the TestMu AI Automation grid with:

```bash
npm run single
```

## Support and Assistance

Our dedicated support team is available 24/7 to assist with any questions or challenges you may encounter. Contact us anytime at [support@testmuai.com](mailto:support@testmuai.com) for prompt and friendly support.

## 🚀 LambdaTest is Now TestMu AI

👋 Welcome to TestMu AI, the next evolution of LambdaTest. As of January 2026, [LambdaTest is Now TestMu AI](https://www.testmuai.com/lambdatest-is-now-testmuai/) - we have evolved from a cross-browser testing cloud into a unified, AI-native quality engineering platform designed for the modern DevOps era.

Whether you have been part of the LambdaTest community for years or are just discovering TestMu AI, our mission remains the same: to help you ship faster with high-scale test execution, autonomous testing, and deep quality analytics.

### 🔄 Our Rebrand Journey

In 2017, we introduced LambdaTest with a clear mission: to become the world's most trusted cloud testing platform. We built a scalable, high-performance test cloud that eliminated flakiness, improved developer feedback cycles, and accelerated release velocity for teams worldwide.

As LambdaTest grew, we expanded the platform into Test Intelligence, Visual Regression Testing, Accessibility Testing, API Testing, and Performance Testing, covering the entire testing lifecycle. These capabilities enabled teams to test any stack, on any technology, at enterprise scale.

Over time, we rebuilt the architecture to be AI-native from the ground up. What began as LambdaTest's high-performance testing cloud has now evolved into TestMu AI, an AI-native, multi-agent platform redefining modern quality engineering.

We chose the name TestMu AI to reflect our shift towards intelligent, autonomous testing. While our identity has changed, our core technology and commitment to the testing community stay the same.

👉 Find [LambdaTest's New Home](https://www.testmuai.com/).

### 🔭 Explore TestMu AI

The same infrastructure LambdaTest customers relied on, now delivered through autonomous AI agents.

- [KaneAI](https://www.testmuai.com/kane-ai/)
- [Agent-to-Agent Testing](https://www.testmuai.com/agent-to-agent-testing/)
- [HyperExecute](https://www.testmuai.com/hyperexecute/)
- [Real Device Cloud](https://www.testmuai.com/real-device-cloud/)
- [Pricing](https://www.testmuai.com/pricing/)
- [Documentation](https://www.testmuai.com/support/docs/)