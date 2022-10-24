const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

const host = 'http://localhost:5500/02.Book-Library/';

describe('Tests', async function () {
    this.timeout(6000);

    let browser, page;

    before(async () => {
        browser = await chromium.launch();
    });

    after(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        page=await browser.newPage();
    });

    afterEach(async () => {
        page.close();
    });

    it('loads all books', async () => {
        await page.goto(host);

        await page.click('text=Load all books');
        await page.waitForSelector('text=Harry Potter');
        const rowData=await page.$$eval('tbody tr', rows=>rows.map(r=>r.textContent));
        
        expect(rowData[0]).to.contains('Harry Potter');
        expect(rowData[0]).to.contains('Rowling');
        expect(rowData[1]).to.contains('C# Fundamentals');
        expect(rowData[1]).to.contains('Nakov');
    })

    it('creates book', async () => {
        await page.goto(host);

        await page.fill('input[name=title]', 'title');
        await page.fill('input[name=author]', 'author');

        const [request] = await Promise.all([
            page.waitForRequest((request) => request.method() == 'POST'),
            page.click('text=Submit')
        ]);

        const data=JSON.parse(request.postData());
        expect(data.title).to.equal('title')
        expect(data.author).to.equal('author')
    })
})
