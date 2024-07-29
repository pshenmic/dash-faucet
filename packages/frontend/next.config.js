const path = require('path')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/**
 * A fork of 'next-pwa' that has app directory support
 * @see https://github.com/shadowwalker/next-pwa/issues/424#issuecomment-1332258575
 */
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  // disable: process.env.NODE_ENV === 'development',
  disable: true,
})

const nextConfig = {
  // uncomment the following snippet if using styled components
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  images: {},
  webpack(config, { isServer }) {
    config.resolve.alias['@'] = path.resolve(__dirname)
    if (!isServer) {
      // We're in the browser build, so we can safely exclude the sharp module
      config.externals.push('sharp')
    }
    return config
  },
}

const KEYS_TO_OMIT = ['webpackDevMiddleware', 'configOrigin', 'target', 'analyticsId', 'webpack5', 'amp', 'assetPrefix']

module.exports = (_phase, { defaultConfig }) => {
  const plugins = [[withPWA], [withBundleAnalyzer, {}]]

  const wConfig = plugins.reduce((acc, [plugin, config]) => plugin({ ...acc, ...config }), {
    ...defaultConfig,
    ...nextConfig,
  })

  const finalConfig = {}
  Object.keys(wConfig).forEach((key) => {
    if (!KEYS_TO_OMIT.includes(key)) {
      finalConfig[key] = wConfig[key]
    }
  })

  return finalConfig
}
