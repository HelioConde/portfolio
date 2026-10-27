"use strict";
const { chromium } = require("playwright");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
fs.mkdirSync("screenshots", { recursive: true });
const port = 8756;
const server = spawn("python3", ["-m", "http.server", String(port), "--bind", "127.0.0.1"], { stdio: "ignore" });
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
(async () => {
  await sleep(1000);
  const browser = await chromium.launch();
  const sizes = [{ width: 320, height: 568 }, { width: 390, height: 844 }, { width: 768, height: 1024 }, { width: 1366, height: 768 }, { width: 1600, height: 900 }];
  const results = [];
  try {
    for (const viewport of sizes) {
      const context = await browser.newContext({ viewport, reducedMotion: "reduce" });
      const page = await context.newPage();
      const errors = [];
      page.on("pageerror", (error) => errors.push(error.message));
      page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
      page.on("response", (response) => { if (response.status() >= 400 && response.url().startsWith("http://127.0.0.1:8756/")) errors.push(response.status() + " " + response.url()); });
      try {
        const response = await page.goto("http://127.0.0.1:8756/", { waitUntil: "load" });
        if (response.status() !== 200) errors.push("HTTP " + response.status());
        await page.getByRole("heading", { name: /Todo projeto começa/i }).waitFor();
        if (await page.locator("html").evaluate((el) => el.scrollWidth > innerWidth + 2)) errors.push("Overflow horizontal");
        const projects = page.locator(".project-card:visible");
        if (await projects.count() !== 4) errors.push("Esperados 4 projetos");
        await page.getByRole("button", { name: "Jogos" }).click();
        if (await projects.count() !== 2) errors.push("Filtro Jogos deveria exibir 2 projetos");
        if (await page.getByRole("button", { name: "Jogos" }).getAttribute("aria-pressed") !== "true") errors.push("Filtro Jogos sem aria-pressed");
        await page.getByRole("button", { name: "Web e ferramentas" }).click();
        if (await projects.count() !== 2) errors.push("Filtro Web deveria exibir 2 projetos");
        await page.getByRole("button", { name: "Todos" }).click();
        if (await projects.count() !== 4) errors.push("Filtro Todos deveria exibir 4 projetos");
        if (viewport.width <= 800) {
          await page.getByRole("button", { name: "Abrir menu" }).click();
          if (await page.getByRole("button", { name: "Fechar menu" }).getAttribute("aria-expanded") !== "true") errors.push("Menu mobile não abriu");
          await page.keyboard.press("Escape");
          if (await page.getByRole("button", { name: "Abrir menu" }).getAttribute("aria-expanded") !== "false") errors.push("Escape não fechou o menu");
        }
        const img = page.locator(".portrait-panel img");
        if (!(await img.evaluate((el) => el.complete && el.naturalWidth > 0))) errors.push("Imagem histórica não carregou");
        await page.screenshot({ path: "screenshots/portfolio-" + viewport.width + "x" + viewport.height + ".png", fullPage: true, animations: "disabled" });
        results.push({ viewport, passed: errors.length === 0, errors });
      } catch (error) {
        errors.push(error.message);
        results.push({ viewport, passed: false, errors });
      } finally { await context.close(); }
    }
  } finally {
    await browser.close();
    server.kill();
  }
  fs.writeFileSync("screenshots/diagnostics.json", JSON.stringify(results, null, 2));
  for (const result of results) console.log(JSON.stringify(result));
  if (results.length !== sizes.length || results.some((x) => !x.passed)) process.exitCode = 1;
})().catch((error) => { console.error(error); server.kill(); process.exitCode = 1; });
