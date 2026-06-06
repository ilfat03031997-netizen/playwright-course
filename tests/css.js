import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    //Открыть сайт

    await page.goto('file:///C:/Users/Ilfat/e2e/tests/burger-order.html');
    // Act



    await page.locator('#customerName').click();
    // await page.locator('.order-form').locator('input').first().fill('Sniper');
    await page.locator('.order-form').locator('input').first().fill('Sniper');
   





    // Assert — проверяем отображение имени пользователя после входа
    // Используем более надёжный локатор вместо data-test-id с динамическим ID
    await expect(page.getByText(username)).toBeVisible({ timeout: 100000 });
    await page.locator 


   
});