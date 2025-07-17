import { test, expect } from '@playwright/test';

test('addition of two numbers', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/Test!.html');
  await page.fill('#num1', '5');
  await page.fill('#num2', '10');
  await page.click('#click');
  const result = await page.textContent('#res');
  expect(result?.trim()).toBe('15');
});

test('subraction of two numbers', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/Test!.html');
  await page.fill('#num1', '5');
  await page.fill('#num2', '10');
  await page.click('#click1');
  const result = await page.textContent('#res');
  expect(result?.trim()).toBe('-5');
});
test('multiplication of two numbers', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/Test!.html');
  await page.fill('#num1', '5');
  await page.fill('#num2', '10');
  await page.click('#click2');
  const result = await page.textContent('#res');
  expect(result?.trim()).toBe('50');
});
test('division of two numbers', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/Test!.html');
  await page.fill('#num1', '50');
  await page.fill('#num2', '10');
  await page.click('#click3');
  const result = await page.textContent('#res');
  expect(result?.trim()).toBe('5');
});

