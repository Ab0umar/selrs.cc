import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
const browser=await chromium.launch({executablePath:'C:/Users/SELRS/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe'});
try {
for (const width of [1440,360]) {
 const page=await browser.newPage({viewport:{width,height:900}});
 await page.goto('file:///E:/selrs.cc/outputs/pentacam-sidebar/index.html');
 await page.locator('.preview svg').first().waitFor();
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
 await page.screenshot({path:`E:/selrs.cc/outputs/pentacam-sidebar/preview-${width}.png`,fullPage:false});
 await page.locator('#selectAll').click();
 await page.getByRole('button',{name:'حفظ المحدد (6)',exact:true}).waitFor();
 await page.locator('#search').fill('1001');
 assert.equal(await page.locator('.scan:visible').count(),2);
 await page.close();
}
console.log('Passed desktop/mobile layout, selection, and search checks.');
} finally {await browser.close();}
