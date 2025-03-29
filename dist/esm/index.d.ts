export interface DebuggingModePlugin {
    DebuggingEnabled(): Promise<{
        usbDebuggingEnabled: boolean;
        wirelessAdbEnabled: boolean;
    }>;
}
declare const DebuggingMode: DebuggingModePlugin;
export { DebuggingMode };
