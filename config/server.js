module.exports = ({ env }) => ({
  host: env('HOST', '192.168.88.232'),
  port: env.int('PORT', 1337),
  // url: 'https://pimis-plan.edp.mn/pimis-edplan',
  // url: 'http://192.168.88.232:1337/pimis-edplan',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '0a4735821b1879f6ab1fa193f5497187'),
    }
  },
});