# gigimalherbe.com

Static artist portfolio site built with plain HTML, CSS, and vanilla JavaScript for direct deployment on GitHub Pages.

## Structure

```text
/
|- index.html
|- README.md
|- css/
|  |- style.css
|- js/
|  |- script.js
|- assets/
|  |- images/
|  |  |- .gitkeep
|  |- icons/
|     |- .gitkeep
|- websit rip/
```

`index.html` is the root entry page so GitHub Pages can serve the site without a build step.

## Editing content

- Update the hero, about, and contact copy directly in `index.html`.
- Replace each gallery card image `src` and link `href` with either:
  - a local relative path such as `assets/images/work-title.webp`
  - an external CDN URL such as `https://cdn.example.com/work-title.webp`
- Keep the same gallery card structure when adding more works.
- Place local images inside `assets/images/`.
- Place favicons or other small site icons inside `assets/icons/`.

## Development notes

- The site is designed to work without JavaScript. The lightbox is an enhancement only.
- All paths are relative so the repo can be tested on the GitHub Pages project URL first.
- When the custom domain is ready, add a `CNAME` file in the repo root with:

```text
gigimalherbe.com
```

## Deployment

1. Push this repo to GitHub.
2. Enable GitHub Pages from the main branch.
3. Test the GitHub Pages URL before changing Cloudflare DNS away from Squarespace.
4. After verification, point the custom domain to GitHub Pages and add the `CNAME` file if needed.
