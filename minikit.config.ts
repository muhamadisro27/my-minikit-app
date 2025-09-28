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
    payload: "eyJkb21haW4iOiJteS1taW5pa2l0LWFwcC1waGkudmVyY2VsLmFwcCJ9",
    signature:
      "MHgyYTNmYWMyZTRjMWEwMGM0NzJiOTljOTYzMzk3MjgwMGM2YzJhYjJlNDc5YmE0NGYyMjZkNmE5MDY0YWVmMzliNDVlNjBkZjdkMDQ2ZjlkZWMxZWZjNDI0ODZmNWZmMjBhZWM1N2M0NDI0NjExZTI5ODQ3OGFiYjI0YTM2OTBiOTFj",
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
