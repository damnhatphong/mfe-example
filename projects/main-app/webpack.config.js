const {
  shareAll,
  share,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

// the library has abstract away a lot of code by writing a wrapper of the module federation lib
// more details can be found here https://github.com/angular-architects/module-federation-plugin/blob/76a2dd570415f6f8898be18d4eec919837eb473f/libs/mf/src/utils/with-mf-plugin.ts#L13
module.exports = withModuleFederationPlugin({
  filename: "remoteEntry.js",

  name: "main-app",

  exposes: {
    // Preferred way: expose corse-grained routes
    // "./routes": "./projects/main-app/src/app/app.routes.ts",
    // "./Component":
    // "./projects/main-app/src/app/modules/home-page/pages/home/home.component",
    "./routes": "./projects/main-app/src/app/modules/modules.routes.ts",
  },

  shared: {
    ...shareAll({
      singleton: false,
      strictVersion: false,
      requiredVersion: "auto",
    }),
  },
});
