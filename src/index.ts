import { registerPlugin } from '@capacitor/core';

export interface DebuggingModePlugin {
  DebuggingEnabled(): Promise<{ usbDebuggingEnabled: boolean; wirelessAdbEnabled: boolean }>;
}

const DebuggingMode = registerPlugin<DebuggingModePlugin>('DebuggingMode', {
  web: () => import('./web').then(m => new m.DebuggingModeWeb()),
});

export { DebuggingMode };
