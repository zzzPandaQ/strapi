'use strict';

const fs = require('fs');
const path = require('path');

/**
 * A set of functions called "actions" for `Admin`
 */

module.exports = {

  index: async (ctx, next) => {
    // Send the HTML file with injected scripts
    ctx.body = strapi.admin.services.admin.generateAdminIndexFile();
  },

  file: async (ctx) => {
    try {
      const file = fs.readFileSync(path.resolve(__dirname, '..', 'public', 'build', ctx.params.file));
      ctx.body = file;
    } catch (err) {
      ctx.body = ctx.notFound();
    }
  }
};
