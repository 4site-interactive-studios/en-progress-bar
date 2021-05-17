# Engaging Networks Progress Bar Script

This project adds a progress bar to your Engaging Networks page.

## Setup

1 - First, upload this script to EN and create a code block adding the script (you can also add it to the Page Template):

```html
<script scr="{YOUR_EN_URL/en-progress-bar.js}"></script>
```

2 - Then add this HTML where you want the Progress Bar to be:

```html
<span data-engrid-progress-indicator>&nbsp;</span>
```

3 - You're done!

Note: You need to follow step 2 on every multi-step page from your campaign.

## Features

- It only runs if have the HTML markup on the page. If you add the script and don't add the HTML, you'll not get any output errors.
- To improve performance, it will not render anything to the page if we can't find the `data-engrid-progress-indicator` element.
- You don't need to worry about any fancy HTML or CSS.
- It's easy to customize by setting up a local dev environment.
- It has no external dependency.

## Development

1. `npm install`

## Deploy

1. `npm run build`

It's going to create a `dist` folder, where you can get the `en-progress-bar.js` file and publish it to your Engaging Networks account.
