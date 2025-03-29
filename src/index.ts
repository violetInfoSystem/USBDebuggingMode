import { registerPlugin } from '@capacitor/core';

import type { DebuggingModePlugin } from './definitions';

const DebuggingMode = registerPlugin<DebuggingModePlugin>('DebuggingMode', {
  web: () => import('./web').then((m) => new m.DebuggingModeWeb()),
});

export * from './definitions';
export { DebuggingMode };
