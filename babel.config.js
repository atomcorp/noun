
module.exports = function (api) {
  api.cache(true);
  const presets = ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"];

  const plugins = [
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread",
    // "@babel/plugin-transform-runtime",
    // "@babel/plugin-syntax-dynamic-import"
  ];

  return {
    presets,
    plugins
  };
}