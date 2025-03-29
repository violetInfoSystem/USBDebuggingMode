import { registerPlugin } from '@capacitor/core';
const DebuggingMode = registerPlugin('DebuggingMode', {
    web: () => import('./web').then(m => new m.DebuggingModeWeb()),
});
export { DebuggingMode };
//# sourceMappingURL=index.js.map