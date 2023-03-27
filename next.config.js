/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public'
})

const nextConfig = {
  pwa: {
    dest: "public", // swの出力ディレクトリ
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withPWA(nextConfig)
