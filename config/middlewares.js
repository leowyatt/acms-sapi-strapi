module.exports = [
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      headers: "*",
      origin: [
        "http://localhost:6010",
        "http://localhost:6030",
        "chrome-extension://aahelpfcopefplnmnphdochceilphfeb",
      ],
      // expose: ["WWW-Authenticate", "Server-Authorization", "Content-Range"],
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
