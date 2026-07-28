# Photography drop-in folder

The site ships with **generated SVG artwork** in every image slot, so nothing
looks broken before you have photos. Drop a real file here using the exact
filename below and that slot upgrades automatically — no code changes.

The artwork stays painted underneath, so a missing file never causes a broken
image icon or a layout shift, and the photo fades in once it loads.

## Filenames the site looks for

| Filename                       | Where it appears              | Suggested crop |
| ------------------------------ | ----------------------------- | -------------- |
| `hero-family-breakfast.jpg`    | Home hero background          | 1920 × 1080    |
| `hero-packet.jpg`              | Home hero product shot        | 1000 × 1250    |
| `product-karuppu-kavuni.jpg`   | Karuppu Kavuni product + card | 1200 × 900     |
| `product-white-idly.jpg`       | White Rice Idly product       | 1200 × 900     |
| `product-millet.jpg`           | Millet product                | 1200 × 900     |
| `product-ragi.jpg`             | Ragi product                  | 1200 × 900     |
| `product-wheat.jpg`            | Wheat product                 | 1200 × 900     |
| `batter-fresh.jpg`             | Before/after slider — "before"| 1200 × 900     |
| `idly-steamed.jpg`             | Before/after slider — "after" | 1200 × 900     |

Gallery tiles and blog covers currently use generated artwork only. To swap
those for photos, add filenames to `art`/`image` fields in
`src/data/content.js` and render them through `<SmartImage>` the same way
`ProductCard` does.

## Before you upload

1. **Resize** to roughly the crop above — do not upload 6000px camera files.
2. **Compress**: [Squoosh](https://squoosh.app) at ~75% quality, or
   `npx @squoosh/cli --mozjpeg '{"quality":75}' *.jpg`.
3. **Prefer WebP** if you can — rename the entry in the table and in the data
   file to `.webp`.
4. Aim for **under 200 KB** per image, under 300 KB for the hero.

## Cloudinary (optional)

If you would rather serve from Cloudinary, replace the `src` values in
`src/data/products.js` with full URLs and change the one line in
`src/components/ui/Art.jsx` that builds the path:

```js
// from
src={`/images/${src}`}
// to
src={src.startsWith('http') ? src : `/images/${src}`}
```

Then use Cloudinary transformation URLs like
`.../upload/f_auto,q_auto,w_1200/product-karuppu-kavuni.jpg` so format and
quality are negotiated per browser.
