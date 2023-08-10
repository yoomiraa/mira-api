let module;
if (typeof module !== 'undefined' && module.exports) {
  module = require('./lib/cjs');
} else {
  // ESM environment
  module = import('./lib/esm');
}

// Export the tools module
module.exports = module;
