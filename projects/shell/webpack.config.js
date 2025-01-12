const { shareAll, share, withModuleFederationPlugin } = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  shared: {
    ...shareAll({ singleton: false, strictVersion: false, requiredVersion: "auto" }),
  },
});
