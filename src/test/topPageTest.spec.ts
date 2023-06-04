import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page
    .getByRole("link", {
      name: "2022年12月19日 初めての投稿~このブログを作った経緯~ このブログの初めての投稿です。このブログを作った経緯とか、これから何に使うのかとかについて説明しています。今後ともよろしくお願いします。",
    })
    .click();
  await expect(page).toHaveTitle(
    "初めての投稿~このブログを作った経緯~ | ゆっきーの砂場"
  );
  await page.getByRole("link", { name: "ゆっきーの砂場" }).click();
  await expect(page).toHaveTitle("記事一覧 | ゆっきーの砂場");
  await page
    .getByRole("link", {
      name: "2022年12月19日 初めての投稿~このブログを作った経緯~ このブログの初めての投稿です。このブログを作った経緯とか、これから何に使うのかとかについて説明しています。今後ともよろしくお願いします。",
    })
    .click();
  await page.getByRole("link", { name: "記事一覧" }).click();
  await expect(page).toHaveTitle("記事一覧 | ゆっきーの砂場");
});
