module.exports = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/quote',
        destination: '/contact/',
        permanent: true,
      },
      {
        source: '/houston-web-design',
        destination: '/solutions/web-development/wordpress-website-development/',
        permanent: true,
      },
    ]
  },
}