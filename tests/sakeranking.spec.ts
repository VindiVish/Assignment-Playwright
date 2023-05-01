import { test, expect, chromium, type Page } from '@playwright/test';

test.describe("SakeRanking", ()=>{

    test('sakeranking', async ({ page }) => {

        //Goto sakeranking.web.app Url
        await page.goto('https://sakeranking.web.app/');
        
        //Open ランキング Page
        await page.getByRole('button', { name: 'ランキング' }).click();

        //Click ranking the sake favorition
        await page.getByRole('button', { name: '新政' }).click();
        await page.getByRole('button', { name: '風の森' }).click();
        await page.getByRole('button', { name: '作' }).click();
        await page.getByRole('button', { name: '十四代' }).click();
        await page.getByRole('button', { name: '而今' }).click();
        await page.getByRole('button', { name: '田酒' }).click();
        await page.getByRole('button', { name: '鳳凰美田' }).click();
        await page.getByRole('button', { name: '仙禽' }).click();
        await page.getByRole('button', { name: '赤武' }).click();
        await page.getByRole('button', { name: '鍋島' }).click();


        //Check String Value
        await expect(page.getByText('清水清三郎商店', { exact: true })).toBeVisible();

        //Go to Favorite Page
        await page.getByRole('button', { name: 'お気に入り' }).click();

        //Unclick the Rank Sake
        await page.getByRole('button', { name: '十四代' }).click();
        await page.getByRole('button', { name: '風の森' }).click();
        await page.getByRole('button', { name: '作' }).click();

        //Check String Value
        await expect(page.getByText('高木酒造', { exact: true })).not.toBeVisible();
    })

})