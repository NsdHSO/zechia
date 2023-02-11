const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'driver',
  filename: "remoteEntry.js",

  exposes: {
    './Module': './apps/driver/src/app/app.module.ts',
  },
  remotes:{
    'frame':"https://joyful-meringue-8a62d9.netlify.app/remoteEntry.mjs"
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
