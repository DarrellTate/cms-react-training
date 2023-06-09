/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'i.annihil.us',
            },
        ],
    },
}

// Next.js chrome devtools coverage settings
// module.exports = {
//     webpack(config) {
//         config.optimization.chunkIds = 'named'
//         config.optimization.mangleExports = false
//         config.optimization.minimize = false
//         config.optimization.minimizer = []
//         config.optimization.moduleIds = 'named'
//         return config
//     }
// }
