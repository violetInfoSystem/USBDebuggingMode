import { WebPlugin } from '@capacitor/core';

export class Debugging extends WebPlugin {
  async isUsbDebuggingEnabled() {
    return {
      isUsbDebugging: false,
      isWirelessAdbEnabled: false
    };
  }
}

const DebuggingMode = new Debugging();

export { DebuggingMode };
