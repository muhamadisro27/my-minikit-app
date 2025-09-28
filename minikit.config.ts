const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
  "http://localhost:3000";

/**
 * MiniApp configuration object. Must follow the mini app manifest specification.
 *
 * @see {@link https://docs.base.org/mini-apps/features/manifest}
 */
export const minikitConfig = {
  accountAssociation: {
    header:
      "eyJmaWQiOjEzNTU1MTksInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHhCMkVhQjFiNEE2OTUxYjVhOTE5QUY2QTZlMzU3MzlEOGU0NDcyNTU2In0",
    payload: "eyJkb21haW4iOiJteS1taW5pa2l0LWFwcC1ieGNuLnZlcmNlbC5hcHAifQ",
    signature:
      "MHhmMDRmNzY5ZWYwYjViODMxMTg1Y2U4YTAzY2EzNzViYjg5ZGZmNGY5NDViYzIyOTc5YTBmYTRiMjQ1MjVjYTVjNGI2ZmFjYjJiODY1OTUzNDBiZDkzZTUzZjQ1OTE1MjhiMGI3ZDhmZTU5Y2ZjMWZlMGYzYzQ1MWQ1ZDE3YWZhODFi",
  },
  baseBuilder: {
    allowedAddresses: [],
  },
  miniapp: {
    version: "1",
    name: "my-minikit-app",
    subtitle: "",
    description: "",
    screenshotUrls: [],
    iconUrl: `${ROOT_URL}/icon.png`,
    splashImageUrl: `${ROOT_URL}/splash.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "utility",
    tags: ["example"],
    heroImageUrl: `${ROOT_URL}/hero.png`,
    tagline: "",
    ogTitle: "",
    ogDescription: "",
    ogImageUrl: `${ROOT_URL}/hero.png`,
  },
} as const;
