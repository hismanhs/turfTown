
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    sassOptions: {
        implementation: 'sass-embedded',
    },
}
module.exports = {
    pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
    webpack(config:any) {

        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        return config;
    },
};
export default nextConfig