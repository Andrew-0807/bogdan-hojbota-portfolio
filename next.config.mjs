/** @type {import('next').NextConfig} */

// Single CSP source of truth. next/font self-hosts, so no external font origin is
// needed; 'unsafe-inline' on styles is unavoidable for Tailwind's runtime style tags.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ")

const nextConfig = {
  // Repo is type-clean; let the build fail loudly if that stops being true.
  typescript: {
    ignoreBuildErrors: false,
  },
  turbopack: {
    root: process.cwd(),
  },
  images: {
    // 3840 is pointless for a portfolio grid and is what made the crawler pull a
    // half-megabyte variant; 1920 covers every real display here.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  async redirects() {
    // English aliases so crawlers looking for the conventional paths land on the
    // Romanian originals instead of 404ing.
    return [
      { source: "/privacy-policy", destination: "/confidentialitate", permanent: true },
      { source: "/privacy", destination: "/confidentialitate", permanent: true },
      { source: "/about", destination: "/profil", permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          // The catalogue is statically generated: serve instantly from the edge,
          // revalidate hourly in the background.
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ]
  },
}

export default nextConfig
