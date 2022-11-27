const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  // basePath: '/webservices',
  images: {
    loader: 'akamai',
    path: '',
  },
  // exportPathMap: function () {
  //   return {
  //     '/': { page: '/' },
  //     // "/about": { page: "/about" },
  //   }
  // },
  //assetPrefix: '',
  assetPrefix: !debug ? '/' : '',
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    // console.log('webpack');
    // console.log(config.module.rules, dev);
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })
    // Important: return the modified config
    return config
  } /*,
  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // console.log('webpackDevMiddleware');
    // console.log(config);
    // Important: return the modified config
    return config
  }, */,
}

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

// // You might need to insert additional domains in script-src if you are using external services
// const ContentSecurityPolicy = `
//   default-src 'self';
//   script-src 'self' 'unsafe-eval' 'unsafe-inline' giscus.app;
//   style-src 'self' 'unsafe-inline';
//   img-src * blob: data:;
//   media-src 'none';
//   connect-src *;
//   font-src 'self';
//   frame-src giscus.app
// `

// const securityHeaders = [
//   // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
//   {
//     key: 'Content-Security-Policy',
//     value: ContentSecurityPolicy.replace(/\n/g, ''),
//   },
//   // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
//   {
//     key: 'Referrer-Policy',
//     value: 'strict-origin-when-cross-origin',
//   },
//   // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
//   {
//     key: 'X-Frame-Options',
//     value: 'DENY',
//   },
//   // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
//   {
//     key: 'X-Content-Type-Options',
//     value: 'nosniff',
//   },
//   // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
//   {
//     key: 'X-DNS-Prefetch-Control',
//     value: 'on',
//   },
//   // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
//   {
//     key: 'Strict-Transport-Security',
//     value: 'max-age=31536000; includeSubDomains',
//   },
//   // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
//   {
//     key: 'Permissions-Policy',
//     value: 'camera=(), microphone=(), geolocation=()',
//   },
// ]

// module.exports = withBundleAnalyzer({
//   reactStrictMode: true,
//   basePath: '/docs',
//   assetsPrefix: '/tailwind-nextjs-blog/',
//   pageExtensions: ['js', 'jsx', 'md', 'mdx'],
//   images: {
//     loader: 'akamai',
//     path: '',
//   },
//   eslint: {
//     dirs: ['pages', 'components', 'lib', 'layouts', 'scripts'],
//   },
//   async headers() {
//     return [
//       {
//         source: '/(.*)',
//         headers: securityHeaders,
//       },
//     ]
//   },
//   webpack: (config, { dev, isServer }) => {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ['@svgr/webpack'],
//     })

//     if (!dev && !isServer) {
//       // Replace React with Preact only in client production build
//       Object.assign(config.resolve.alias, {
//         'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
//         react: 'preact/compat',
//         'react-dom/test-utils': 'preact/test-utils',
//         'react-dom': 'preact/compat',
//       })
//     }

//     return config
//   },
// })
