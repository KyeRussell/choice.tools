import { test, expect } from '@playwright/test';

test('Smoke test', async ({ page }) => {
	await page.goto('/');

	// Add options.
	await page.getByPlaceholder('Type here...').fill('A');
	await page.getByRole('button', { name: '+' }).click();
	await page.getByPlaceholder('And another...').fill('B');
	await page.getByRole('button', { name: '+' }).click();
	await page.getByPlaceholder('And another...').fill('C');
	await page.getByRole('button', { name: '+' }).click();

	// Run through pairs.
	await page.getByRole('button', { name: "I've finished adding choices" }).click();
	await page.getByRole('button', { name: 'A' }).click();
	await page.getByRole('button', { name: 'A' }).click();
	await page.getByRole('button', { name: 'B' }).click();

	// Are we at results?
	await expect(page.getByText('Results:')).toBeVisible();
});
