describe('WebdriverIO and Appium, when interacting with a login form,', () => {
    beforeEach(async () => {
    });

    it('tapping increment should increment counter by 1', async() => {
        await $('~Appium Trial').waitForDisplayed({
            timeout: 2000,
        });
        await browser.saveScreenshot('./reports/screenshots/pre_screens.png');

        await $('~Flutter Demo Home Page').waitForDisplayed();
        await $('~You have pushed the button this many times:').waitForDisplayed();
        await $('~0').waitForDisplayed();
        await $('~Increment').waitForDisplayed();
        await $('~Increment').click();
        await $('~1').waitForDisplayed();

        await browser.saveScreenshot('./reports/screenshots/post_screen.png');
    })
});