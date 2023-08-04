"use strict";

module.exports = {
  "preview-button": {
    config: {
      contentTypes: [
        {
          uid: "api::page.page",
          draft: {
            url: "http://localhost:3000/api/preview",
            query: {
              type: "page",
              slug: "{slug}",
            },
          },
          published: {
            url: "http://localhost:3000/preview/{slug}",
          },
        },
      ],
    },
  },
};
