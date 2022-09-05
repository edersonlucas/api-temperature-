const puppeteer = require('puppeteer');

const getTemperatureFromGoogle = async (name) => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox'] 
  });
  const page = await browser.newPage();
  await page.goto(`https://www.google.com.br/search?q=tempo+${name}`);
  try {
    await page.waitForSelector('#wob_tm', { timeout: 2000} )
    const temperature = await page.$$eval('#wob_tm', el => el.map((el) => el.textContent));
    const city = await page.$$eval('#wob_loc', el => el.map((el) => el.textContent));
    const lastUpdate = await page.$$eval('#wob_dts', el => el.map((el) => el.textContent));
    const conditions = await page.$$eval('#wob_dc', el => el.map((el) => el.textContent));
    const humidity = await page.$$eval('#wob_hm', el => el.map((el) => el.textContent));
    await browser.close();
    return {
      city: city[0],
      temperature: temperature[0],
      humidity: humidity[0],
      conditions: conditions[0],
      lastUpdate: lastUpdate[0],
    }
  } catch (e) {
    await browser.close();
    return ''
  }
}

module.exports = getTemperatureFromGoogle;