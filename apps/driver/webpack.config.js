const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'driver',
  filename: "remoteEntry.js",

  exposes: {
    './Module': './apps/driver/src/app/app.module.ts',
  },
  remotes:{
    'frame':"https://crispy-octo.netlify.app/remoteEntry.mjs",
    'frameDrawer':"https://shared-parakeet.vercel.app/remoteEntry.mjs"
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
