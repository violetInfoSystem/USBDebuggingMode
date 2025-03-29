import { WebPlugin } from '@capacitor/core';
import { DebuggingModePlugin } from './index';

export class DebuggingModeWeb extends WebPlugin implements DebuggingModePlugin {
  async DebuggingEnabled(): Promise<{ usbDebuggingEnabled: boolean; wirelessAdbEnabled: boolean }> {
    return {
      usbDebuggingEnabled: false,
      wirelessAdbEnabled: false
    };
  }
}
