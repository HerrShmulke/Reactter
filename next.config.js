module.exports = {
  images: {
    domains: ['sun9-32.userapi.com'],
  },

  async rewrites() {
    return [
      {
        source: '/api/graphql',
        destination: 'http://127.0.0.1:3000/graphql',
      },
    ];
  },
};
