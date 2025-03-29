import { WebPlugin } from '@capacitor/core';
export class DebuggingModeWeb extends WebPlugin {
    async DebuggingEnabled() {
        return {
            usbDebuggingEnabled: false,
            wirelessAdbEnabled: false
        };
    }
}
//# sourceMappingURL=web.js.map