module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'http://pimis-plan.edp.mn/pimis-edplan',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '0a4735821b1879f6ab1fa193f5497187'),
    }
  },
});
