from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()

    # Home page
    page.goto("http://localhost:3000")
    page.screenshot(path="jules-scratch/verification/home.png")

    # Blog page
    page.goto("http://localhost:3000/blog")
    page.screenshot(path="jules-scratch/verification/blog.png")

    # Contact page
    page.goto("http://localhost:3000/contact")
    page.screenshot(path="jules-scratch/verification/contact.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
