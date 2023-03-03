const fs = require('fs');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromium = require('chromium');
require('chromedriver')
const {Builder, Browser, By, Key, until} = require('selenium-webdriver');



async function start() {
    let options = new chrome.Options();
    options.setChromeBinaryPath(chromium.Path);

    options.addArguments('--disable-infobars')
    options.addArguments('--disable-dev-shm-usage')
    options.addArguments('--remote-debugging-port=9222')
options.excludeSwitches('enable-automation') 
    options.addArguments('--window-size=1280,960');
options.addArguments("disable-infobars");

    const driver = await new webdriver.Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    await driver.get('https://login.microsoftonline.com/common/oauth2/v2.0/authorize');
										//SET THE EMAIL HERE
    driver.wait(until.elementLocated(By.id('i0116')), 5 * 1000).then(el => {    el.sendKeys("someName@domain.com"); console.log("Element found")});

  //  driver.wait(function () {      return driver.elementLocated(webdriver.By.id("i0116"));  }).then(el => {  });
    setTimeout(function () {
        console.log('Hello Google!');
        driver.wait( driver.findElement(By.css('input[type="submit"]')).click() );
        setTimeout(function () {
          //login									//SET THE PASSWORD HERE
            driver.wait(until.elementLocated(By.id('i0118')), 5 * 1000).then(el => {    el.sendKeys("Password"); console.log("Element found")});
            driver.wait( driver.findElement(By.css('input[type="submit"]')).click() );
            //click yes
            setTimeout(function () {
                driver.wait( driver.findElement(By.id('idSIButton9')).click() );
                //go to mail
                setTimeout(function () {
                    driver.get('https://outlook.office.com/mail/')
                    setTimeout(function () {


                      console.log("now clicking")
                      driver.findElement(By.className('splitPrimaryButton root-218')).click()

			driver.requests.forEach(myFunction);

function myFunction(request) {
        	  print(
			  //here automate the rest,
            request.url,
         //   request.response.status_code,
          //  request.response.headers['Content-Type']
        )
}
	

                    }, 20000)
                 }, 2000)
             }, 2000)
                    //await driver.quit();
         }, 2000)
                //await driver.quit();
     }, 3000)


}




start();
