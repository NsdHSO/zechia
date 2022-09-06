const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'driver',
  filename: "remoteEntry.js",

  exposes: {
    './Module': './apps/driver/src/app/driver/driver.module.ts',
    './Truck': './apps/driver/src/app/truck/truck.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
