import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log(`BROWSER CONSOLE: ${msg.type()}: ${msg.text()}`));
  page.on('pageerror', err => console.log(`BROWSER ERROR: ${err.message}`));
  
  console.log('Navigating to http://localhost:5173/login...');
  try {
    await page.goto('http://localhost:5173/login', { waitUntil: 'networkidle', timeout: 10000 });
    const content = await page.content();
    console.log('HTML CONTENT (length):', content.length);
    if (content.length < 500) {
       console.log(content);
    }
  } catch (e) {
    console.log('Navigation failed:', e.message);
    
    console.log('Trying 5174 instead...');
    try {
      await page.goto('http://localhost:5174/login', { waitUntil: 'networkidle', timeout: 10000 });
      const content = await page.content();
      console.log('HTML CONTENT (length):', content.length);
      if (content.length < 500) {
         console.log(content);
      }
    } catch (e2) {
      console.log('Navigation failed:', e2.message);
    }
  }
  
  await browser.close();
})();
