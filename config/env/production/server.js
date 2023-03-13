module.exports = ({ env }) => ({
  proxy: true,
  url: env('DATABASE_URL'), // Sets the public URL of the application.
  app: {
    keys: env.array('APP_KEYS')
  },
});
