import * as cjsModule from './lib/cjs';
import * as esmModule from './lib/esm';

const module = typeof module !== 'undefined' && module.exports ? cjsModule : esmModule;

export default module;
