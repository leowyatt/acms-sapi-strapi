const pkg = require("./package.json");

module.exports = {
  apps: [
    {
      version: pkg.version,
      name: "strapi-prod",
      script: "yarn start",
      instance_var: "strapi",
      env: {
        NODE_ENV: "production",
        PORT: "6020",
      },
    },
    {
      version: pkg.version,
      name: "strapi-dev",
      script: "yarn develop",
      instance_var: "strapi",
      env: {
        NODE_ENV: "development",
        PORT: "6010",
      },
      // watch: true,
    },
  ],
};
