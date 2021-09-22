module.exports = {
  async redirects() {
    return [
      {
        source: '/quote',
        destination: '/contact/',
        permanent: true,
      },
      {
        source: '/e-commerce',
        destination: '/solutions/web-development/ecommerce-website-development/',
        permanent: true,
      },
      {
        source: '/houston-seo',
        destination: '/solutions/digital-marketing/search-engine-optimization/',
        permanent: true,
      },
      {
        source: '/clients/verecore',
        destination: '/clients/',
        permanent: true,
      },
      {
        source: '/clients/peh',
        destination: '/clients/',
        permanent: true,
      },
      {
        source: '/houston-web-design',
        destination: '/solutions/web-development/wordpress-website-development/',
        permanent: true,
      },
      {
        source: '/clients/carla-romo',
        destination: '/clients/',
        permanent: true,
      },
      {
        source: '/our-clients-header',
        destination: '/clients/',
        permanent: true,
      },
      {
        source: '/houston-website-hosting',
        destination: '/',
        permanent: true,
      },
      {
        source: '/clients/tattoo-releaf',
        destination: '/clients/',
        permanent: true,
      },
      {
        source: '/home/facebook-cover',
        destination: '/',
        permanent: true,
      },
      {
        source: '/clients/st-tropez',
        destination: '/clients/',
        permanent: true,
      },
      {
        source: '/clients/infusiv-hydration',
        destination: '/clients/',
        permanent: true,
      },
      {
        source: '/houston-social-media-marketing',
        destination: '/solutions/digital-marketing/social-media-marketing/',
        permanent: true,
      },
      {
        source: '/clients/irban-window-films',
        destination: '/clients/',
        permanent: true,
      },
      {
        source: '/home/facebook-cover',
        destination: '/',
        permanent: true,
      },
      {
        source: '/annies-pet-sitting-computer/',
        destination: '/clients/',
        permanent: true,
      },
      {
        source: '/clients/lessons-that-rock',
        destination: '/clients/',
        permanent: true,
      },
      {
        source: '/pj-turner-dance-computer',
        destination: '/clients/',
        permanent: true,
      },
      {
        source: '/e-commerce/ecommerce-header/',
        destination: '/solutions/web-development/ecommerce-website-development/',
        permanent: true,
      },
      {
        source: '/lessons-that-rock-computer',
        destination: '/clients/',
        permanent: true,
      },
      {
        source: '/clients/special-guest-shop',
        destination: '/clients/',
        permanent: true,
      },   
      {
        source: '/clients/blue-collar-membership',
        destination: '/clients/bluecollar/',
        permanent: true,
      },  
      {
        source: '/see-me-now-computer',
        destination: '/clients/',
        permanent: true,
      }, 
      {
        source: '/blue-collar-membership-computer',
        destination: '/clients/',
        permanent: true,
      }, 
      {
        source: '/houston-website-hosting/hosting-offer',
        destination: '/',
        permanent: true,
      }, 
      {
        source: '/houston-website-hosting/hosting-header',
        destination: '/',
        permanent: true,
      }, 
      {
        source: '/whats-outside-our-door-computer',
        destination: '/clients/',
        permanent: true,
      }, 
      {
        source: '/houston-seo/houston-seo-header',
        destination: '/solutions/digital-marketing/search-engine-optimization/',
        permanent: true,
      }, 
      {
        source: '/clients/the-blue-collar-success-group/',
        destination: '/clients/bluecollar/',
        permanent: true,
      }, 
    ]
  },
  trailingSlash: true,
  images: {
    domains: ['static.ghost.org'],
  },
}